import Text from '../text/Text'
import useAvatar from './useAvatar'
import styles from './avatar.module.css'
import cn from 'classnames'

interface AvatarProps {
  name: string
  color: string
  small?: boolean
}

export default function Avatar({ name, color, small }: AvatarProps) {
  const { nameInitials } = useAvatar({ name })

  return (
    <div
      className={cn(styles.avatar, { [styles.small]: small })}
      style={{ background: color }}
      title={name}
    >
      <Text white>{nameInitials}</Text>
    </div>
  )
}
