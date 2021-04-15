import cn from 'classnames'
import { motion } from 'framer-motion'
import Avatar from '../../shared/avatar/Avatar'
import Text from '../../shared/text/Text'
import styles from './chatPerson.module.css'
import { chatPersonVariants } from './motions'

interface ChatPersonProps {
  name: string
  suffix?: string
  label: string
  color: string
}

export default function ChatPerson({
  name,
  suffix,
  label,
  color,
}: ChatPersonProps) {
  return (
    <motion.div
      variants={chatPersonVariants}
      initial='initial'
      animate='pop'
      className={styles.container}
    >
      <Avatar name={name} color={color} />
      <div className={styles.nameContainer}>
        <Text white className={cn(styles.name, styles.ellipsis)} title={name}>
          {name} {suffix}
        </Text>
        <Text white className={cn(styles.label, styles.ellipsis)} title={label}>
          {label}
        </Text>
      </div>
    </motion.div>
  )
}
