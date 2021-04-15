import cn from 'classnames'
import styles from './text.module.css'

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'title1' | 'title2' | 'caption1' | 'caption2'
  white?: boolean
}

export default function Text({ variant, white, ...props }: TextProps) {
  return (
    <span
      {...props}
      className={cn(styles.text, props.className, {
        [styles.white]: white,
        [styles[variant!]]: !!variant,
      })}
    />
  )
}
