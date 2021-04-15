import React from 'react'
import { ChatContext } from '../../../providers/ChatProvider'
import { UserContext } from '../../../providers/UserProvider'

export default function useChatParticipants() {
  const { participants } = React.useContext(ChatContext)!
  const { user } = React.useContext(UserContext)!
  const [, setUpdate] = React.useState(0)

  /**
   * Intervalo de tempo com o propósito de rerenderizar os participantes de 1 em 1 minuto
   *
   * A intenção é que a mensagem "última mensagem hà..." não fique desatualizado depois de
   * muito tempo sem novos participantes
   */
  React.useEffect(() => {
    setInterval(() => setUpdate(Date.now()), 60000)
  }, [])

  return { participants, user }
}
