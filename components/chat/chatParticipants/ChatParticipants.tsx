import Scrollbar from 'react-scrollbars-custom'
import Text from '../../shared/text/Text'
import ChatPerson from '../chatPerson/ChatPerson'
import ChatTitle from '../chatTitle/ChatTitle'
import styles from './chatParticipants.module.css'
import useChatParticipants from './useChatParticipants'

export default function ChatParticipants() {
  const { participants, user } = useChatParticipants()

  return (
    <div className={styles.container}>
      <ChatTitle>Participantes</ChatTitle>

      {!participants?.length ? (
        <Text className={styles.noParticipants} white variant='caption1'>
          Poxa, ainda não há ninguém no bate-papo. <br />
          <br /> Envie uma mensagem para ser o primeiro a participar.
        </Text>
      ) : (
        <Scrollbar style={{ flex: 1 }}>
          <div className={styles.stack}>
            {participants.map(participant => (
              <ChatPerson
                key={participant.uuid}
                name={participant.author}
                suffix={participant.uuid === user!.uuid ? '(você)' : undefined}
                label={`última mensagem ${participant.time.fromNow()}`}
                color={participant.color}
              />
            ))}
          </div>
        </Scrollbar>
      )}
    </div>
  )
}
