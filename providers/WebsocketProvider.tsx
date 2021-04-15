import React from 'react'
import { WS_URL, WS_ERROR_RETRY_MS } from '../common/constants'
import { ChatContext } from './ChatProvider'

interface WebsocketProviderProps {
  children: React.ReactNode
}

interface WebsocketProviderContext {
  connect(callback: () => void): void
  emitMessage(message: string): void
}

export const WebsocketContext = React.createContext<
  WebsocketProviderContext | undefined
>(undefined)

const WebsocketProvider = (props: WebsocketProviderProps) => {
  const { handleNewMessage } = React.useContext(ChatContext)!

  const ws = React.useRef<WebSocket>()

  const connect = React.useCallback((callback: () => void) => {
    wsConnect()
    wsOnMessage()
    wsOnClose()
    wsOnConnect(callback)
  }, [])

  const wsConnect = React.useCallback(
    () => (ws.current = new WebSocket(WS_URL)),
    []
  )

  const wsOnMessage = React.useCallback(
    () =>
      (ws.current!.onmessage = event =>
        handleNewMessage(JSON.parse(event.data))),
    []
  )

  const wsOnClose = React.useCallback(
    () =>
      (ws.current!.onclose = () => setTimeout(wsConnect, WS_ERROR_RETRY_MS)),
    []
  )

  const wsOnConnect = React.useCallback(
    (callback: () => void) => (ws.current!.onopen = callback),
    []
  )

  const emitMessage = React.useCallback((data: string, tries: number = 0) => {
    try {
      ws.current!.send(data)
    } catch (e) {
      if (tries < 5) {
        console.error(
          `Erro ao enviar mensagem "${data}". Será feita uma nova tentativa em 3 segundos.`
        )
        setTimeout(() => emitMessage(data, tries + 1), WS_ERROR_RETRY_MS)
      }
    }
  }, [])

  return (
    <WebsocketContext.Provider value={{ connect, emitMessage }}>
      {props.children}
    </WebsocketContext.Provider>
  )
}

export default WebsocketProvider
