import React from 'react'
import { UserContext } from '../../providers/UserProvider'

export default function useUserSubmission() {
  const { createUser } = React.useContext(UserContext)!
  const [name, setName] = React.useState('')

  const enterUser = React.useCallback(
    event => {
      event.preventDefault()
      const _name = name.trim()
      if (_name) createUser(_name)
    },
    [name]
  )

  return { name, setName, enterUser }
}
