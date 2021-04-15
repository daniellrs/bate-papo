import { motion } from 'framer-motion'
import { containerVariants } from './motion'
import styles from './container.module.css'
import UserSubmission from '../userSubmission/UserSubmission'
import useContainer from './useContainer'
import ChatContainer from '../chat/chatContainer/ChatContainer'

export default function Container() {
  const { hasUser } = useContainer()

  return (
    <motion.div
      initial='initial'
      animate='show'
      variants={containerVariants}
      className={styles.container}
    >
      {hasUser ? <ChatContainer /> : <UserSubmission />}
    </motion.div>
  )
}
