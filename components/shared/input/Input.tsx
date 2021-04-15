import cn from 'classnames'
import styles from './input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean
}

export default function Input({ fullWidth, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={cn(styles.input, props.className, {
        [styles.fullWidth]: fullWidth,
      })}
    />
  )
}
