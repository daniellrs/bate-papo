import Button from '../../shared/button/Button'
import Input from '../../shared/input/Input'
import styles from './chatInput.module.css'
import useChatInput from './useChatInput'

export default function ChatInput() {
  const { message, setMessage, sendMessage } = useChatInput()

  return (
    <form onSubmit={sendMessage}>
      <div className={styles.container}>
        <Input
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder='Digite uma mensagem'
          autoFocus
          fullWidth
        />
        <div className={styles.buttonContainer}>
          <Button className={styles.button}>Enviar</Button>
        </div>
      </div>
    </form>
  )
}
