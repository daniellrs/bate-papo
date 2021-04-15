import React from 'react'
import Scrollbar from 'react-scrollbars-custom'
import { ChatContext } from '../../../providers/ChatProvider'
import {
  MESSAGES_SET_QUANTITY,
  SCROLL_TOP_LOAD_TRESHOLD,
} from '../../../common/constants'
import { MessageData } from '../../../interfaces'
import { ScrollState } from 'react-scrollbars-custom/dist/types/types'

export default function useChatMessages() {
  const scrollbarRef = React.useRef(null)
  const { messages } = React.useContext(ChatContext)!
  const [additionalQuantity, setAdditionalQuantity] = React.useState(0)

  /**
   * Função para dividir conjuntos de mensagens por autor e respeitando uma quantidade
   * máxima de mensagens a ser exibida na tela
   *
   * Digamos que tenhamos essa lista de mensagens na aplicação:
   *  [
   *    {author: 'Daniel', mensagem: 'Olá'},
   *    {author: 'Daniel', mensagem: 'Tudo bem?'},
   *    {author: 'Ivo', mensagem: 'Tranquilasso'}
   *  ]
   *
   * Ela então será processada para ficar neste formato:
   *  [
   *    [
   *      {author: 'Daniel', mensagem: 'Olá'},
   *      {author: 'Daniel', mensagem: 'Tudo bem?'},
   *    ],
   *    [
   *      {author: 'Ivo', mensagem: 'Tranquilasso'}
   *    ]
   *  ]
   */
  const messagesSet = React.useMemo(() => {
    if (!messages) return []

    const messagesSet: MessageData[][] = []
    let set: MessageData[] = []
    let quantity = 0

    for (let index = messages.length - 1; index >= 0; index--) {
      const message = messages[index]
      const currentSetUuid = set[0]?.uuid

      if (quantity >= MESSAGES_SET_QUANTITY + additionalQuantity) break
      quantity++

      if (!currentSetUuid) {
        set.unshift(message)
        continue
      }

      if (currentSetUuid === message.uuid) set.unshift(message)
      else {
        messagesSet.push(set)
        set = [message]
      }
    }

    if (set.length) messagesSet.push(set)

    return messagesSet.reverse()
  }, [additionalQuantity, messages])

  const onScroll = React.useCallback(
    (...args: Array<ScrollState | React.UIEvent<HTMLElement>>) => {
      const [scrollValues] = args as ScrollState[]

      if (scrollValues.scrollTop <= SCROLL_TOP_LOAD_TRESHOLD) {
        setAdditionalQuantity(quantity => quantity + MESSAGES_SET_QUANTITY)
      }
    },
    []
  )

  React.useEffect(() => {
    setAdditionalQuantity(0)
    if (scrollbarRef.current)
      (scrollbarRef.current! as Scrollbar).scrollToBottom()
  }, [messages])

  return { scrollbarRef, messagesSet, onScroll }
}
