import React from 'react'

interface UseAvatarParams {
  name: string
}

export default function useAvatar({ name }: UseAvatarParams) {
  const nameInitials = React.useMemo(() => {
    const splitted = name.split(' ')
    if (splitted.length === 1)
      return `${splitted[0][0] || ''}${splitted[0][1] || ''}`
    return `${splitted[0][0] || ''}${splitted[splitted.length - 1][0] || ''}`
  }, [name])

  return { nameInitials }
}
