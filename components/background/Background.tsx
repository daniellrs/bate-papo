import React from 'react'
import { motion } from 'framer-motion'
import styles from './background.module.css'
import { circleContainerVariants, circleVariants } from './motion'
import useBackground from './useBackground'

interface BackgroundProps {
  children: React.ReactNode
}

export default function Background({ children }: BackgroundProps) {
  const { hasUser } = useBackground()

  return (
    <>
      <div className={styles.container}>{children}</div>
      <motion.div
        variants={circleContainerVariants}
        animate={hasUser ? 'withUser' : undefined}
        className={styles.circle_container}
      >
        <motion.div
          variants={circleVariants}
          animate={hasUser ? 'withUser' : 'breathe'}
          className={styles.circle}
        />
      </motion.div>
    </>
  )
}
