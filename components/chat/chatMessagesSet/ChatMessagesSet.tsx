import { MessageData } from '../../../interfaces'
import ChatMessage from '../chatMessage/ChatMessage'
import useChatMessagesSet from './useChatMessagesSet'
import styles from './chatMessagesSet.module.css'
import Avatar from '../../shared/avatar/Avatar'
import Text from '../../shared/text/Text'
import cn from 'classnames'

interface ChatMessagesSetProps {
  set: MessageData[]
}

export default function ChatMessagesSet({ set }: ChatMessagesSetProps) {
  const { user } = useChatMessagesSet({ set })

  return (
    <div className={styles.container}>
      {!user.owner && (
        <div className={styles.avatarContainer}>
          <Avatar name={user.author} color={user.color} small />
        </div>
      )}

      <div
        className={cn(styles.messagesContainer, {
          [styles.messagesRight]: user.owner,
        })}
      >
        <Text variant='caption2' className={styles.userText}>
          {user.owner ? 'Você' : user.author}, {user.time.calendar()}
        </Text>
        {set.map(message => (
          <ChatMessage
            key={`${message.uuid}${message.time.toDate().getTime()}`}
            message={message}
            side={user.owner ? 'right' : 'left'}
          />
        ))}
      </div>
    </div>
  )
}
