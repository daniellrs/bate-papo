export const circleVariants = {
  withUser: {
    scale: 1,
    width: '100%',
    height: '100%',
    borderColor: [
      'var(--background-with-user)',
      'var(--background-with-user-strong)',
      'var(--background-with-user)',
    ],
    backgroundColor: [
      'var(--background-with-user)',
      'var(--background-with-user-strong)',
      'var(--background-with-user)',
    ],
    borderWidth: 0,
    borderRadius: 0,
    transition: {
      duration: 0.6,
    },
  },
  breathe: {
    scale: [0.9, 1.7, 0.9, 0.9],
    transition: {
      repeat: Infinity,
      duration: 5.5,
    },
  },
}

export const circleContainerVariants = {
  withUser: {
    filter: 'blur(0)',
    transition: {
      duration: 0.4,
    },
  },
}
