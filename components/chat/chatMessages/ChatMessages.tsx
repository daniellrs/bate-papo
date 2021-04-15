import { motion } from 'framer-motion'
import Scrollbar from 'react-scrollbars-custom'
import Text from '../../shared/text/Text'
import ChatInput from '../chatInput/ChatInput'
import ChatMessagesSet from '../chatMessagesSet/ChatMessagesSet'
import ChatTitle from '../chatTitle/ChatTitle'
import styles from './chatMessages.module.css'
import { noParticipantsVariants } from './motion'
import useChatMessages from './useChatMessages'

export default function ChatMessages() {
  const { scrollbarRef, messagesSet, onScroll } = useChatMessages()

  return (
    <div className={styles.container}>
      <ChatTitle>Mensagens</ChatTitle>
      <div className={styles.content}>
        {!messagesSet?.length ? (
          <motion.div
            variants={noParticipantsVariants}
            initial='initial'
            animate='show'
            className={styles.noParticipants}
          >
            <img src='./speechBalloons.png' />
            <Text variant='caption1'>
              Nenhuma mensagem foi enviada ainda. <br /> Seja o primeiro!
            </Text>
          </motion.div>
        ) : (
          <Scrollbar
            ref={scrollbarRef}
            onScroll={onScroll}
            style={{ flex: 1 }}
            noScrollX
          >
            {messagesSet.map(set => {
              const firstMessage = set[0]

              return (
                <ChatMessagesSet
                  key={`${firstMessage.uuid}${firstMessage.time}`}
                  set={set}
                />
              )
            })}
          </Scrollbar>
        )}
      </div>
      <ChatInput />
    </div>
  )
}
