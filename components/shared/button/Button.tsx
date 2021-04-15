import cn from 'classnames'
import styles from './button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
}

export default function Button({ fullWidth, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(styles.button, props.className, {
        [styles.fullWidth]: fullWidth,
      })}
    />
  )
}
