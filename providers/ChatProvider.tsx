import React from 'react'
import { Message, MessageData, Participant } from '../interfaces'
import dayjs from '../common/dayjs'
import { splitAuthorWithUuid } from '../common/uuid'
import { MAX_PARTICIPANTS_TO_SHOW } from '../common/constants'

interface ChatProviderProps {
  children: React.ReactNode
}

interface ChatProviderContext {
  messages: MessageData[] | undefined
  participants: Participant[]
  handleNewMessage(message: Message): void
}

export const ChatContext = React.createContext<ChatProviderContext | undefined>(
  undefined
)

const ChatProvider = (props: ChatProviderProps) => {
  const [messages, setMessages] = React.useState<MessageData[]>()

  const participants = React.useMemo(() => {
    const participants: {
      [key: string]: { author: string; color: string; time: dayjs.Dayjs }
    } = {}

    messages?.forEach(
      message =>
        (participants[message.uuid] = {
          author: message.author,
          color: message.color,
          time: message.time,
        })
    )

    return Object.keys(participants)
      .map(uuid => ({
        uuid,
        ...participants[uuid],
      }))
      .sort((a, b) => (a.time.diff(b.time, 'seconds') < 0 ? 1 : -1))
      .slice(0, MAX_PARTICIPANTS_TO_SHOW)
  }, [messages])

  const handleNewMessage = React.useCallback(({ type, data }: Message) => {
    if (type === 'history')
      setMessages((data as MessageData[]).map(processMesage))

    if (type === 'message')
      setMessages(messages => [
        ...(messages || []),
        processMesage(data as MessageData),
      ])
  }, [])

  const processMesage = React.useCallback(
    (message: MessageData) => ({
      ...message,
      ...splitAuthorWithUuid(message.author),
      time: dayjs(message.time).tz(),
    }),
    []
  )

  return (
    <ChatContext.Provider value={{ messages, participants, handleNewMessage }}>
      {props.children}
    </ChatContext.Provider>
  )
}

export default ChatProvider
