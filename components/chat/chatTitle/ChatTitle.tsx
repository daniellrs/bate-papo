import Text from '../../shared/text/Text'
import styles from './chatTitle.module.css'

interface ChatTitleProps {
  children: React.ReactNode
}

export default function ChatTitle({ children }: ChatTitleProps) {
  return (
    <div className={styles.container}>
      <Text white variant='title1'>
        {children}
      </Text>
    </div>
  )
}
