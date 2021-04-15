import React from 'react'
import { WebsocketContext } from '../../../providers/WebsocketProvider'

export default function useChatInput() {
  const { emitMessage } = React.useContext(WebsocketContext)!
  const [message, setMessage] = React.useState('')

  const sendMessage = React.useCallback(
    event => {
      event.preventDefault()

      const _message = message.trim()
      if (_message) {
        emitMessage(_message)
        setMessage('')
      }
    },
    [message]
  )

  return { message, setMessage, sendMessage }
}
