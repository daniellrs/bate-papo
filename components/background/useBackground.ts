import React from 'react'
import { UserContext } from '../../providers/UserProvider'

export default function useBackground() {
  const { hasUser } = React.useContext(UserContext)!

  return { hasUser }
}
