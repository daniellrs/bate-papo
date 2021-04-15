import { motion } from 'framer-motion'
import { chatContainerVariants } from './motion'
import styles from './chatContainer.module.css'
import ChatParticipants from '../chatParticipants/ChatParticipants'
import ChatMessages from '../chatMessages/ChatMessages'

export default function ChatContainer() {
  return (
    <motion.div
      variants={chatContainerVariants}
      initial='initial'
      animate='grow'
      className={styles.container}
    >
      <ChatParticipants />
      <ChatMessages />
    </motion.div>
  )
}
