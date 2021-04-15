import { MessageData } from '../../../interfaces'
import Text from '../../shared/text/Text'
import styles from './chatMessage.module.css'
import cn from 'classnames'
import { motion } from 'framer-motion'
import { chatMessageVariants } from './motion'

interface ChatMessageProps {
  message: MessageData
  side?: string
}

export default function ChatMessage({
  message,
  side = 'left',
}: ChatMessageProps) {
  const isRight = side === 'right'

  return (
    <motion.div
      variants={chatMessageVariants}
      initial={isRight ? 'initialRight' : 'initialLeft'}
      animate='animate'
      className={cn(styles.container, { [styles.blue]: isRight })}
    >
      <Text white={isRight}>{message.text}</Text>
    </motion.div>
  )
}
