import React from 'react'
import { MessageData } from '../../../interfaces'
import { UserContext } from '../../../providers/UserProvider'

interface UseChatMessagesSetParams {
  set: MessageData[]
}

export default function useChatMessagesSet({ set }: UseChatMessagesSetParams) {
  const { user: _user } = React.useContext(UserContext)!

  const user = React.useMemo(() => {
    const lastMessage = set[set.length - 1]

    return {
      author: lastMessage.author,
      color: lastMessage.color,
      time: lastMessage.time,
      owner: lastMessage.uuid === _user?.uuid,
    }
  }, [set])

  return { user }
}
