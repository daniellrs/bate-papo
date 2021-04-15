import Button from '../shared/button/Button'
import Input from '../shared/input/Input'
import Text from '../shared/text/Text'
import styles from './userSubmission.module.css'
import useUserSubmission from './useUserSubmission'

export default function UserSubmission() {
  const { name, setName, enterUser } = useUserSubmission()

  return (
    <form onSubmit={enterUser}>
      <div className={styles.container}>
        <div className={styles.stack}>
          <div>
            <Text white variant='title2'>
              Seja bem vindo ao Bate-Papo
            </Text>
          </div>
          <div>
            <Text white variant='caption1'>
              Informe seu nome abaixo para começar a bater papo só com
              gente-fina!
            </Text>
          </div>
          <div>
            <Input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder='Informe o seu nome/apelido'
              autoFocus
              fullWidth
            />
          </div>
          <div className={styles.buttonContainer}>
            <Button className={styles.button} fullWidth>
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
