import React from 'react'
import { WebsocketContext } from './WebsocketProvider'
import { v4 as uuidv4 } from 'uuid'
import { User } from '../interfaces'
import { mergeAuthorWithUuid } from '../common/uuid'

interface UserProviderProps {
  children: React.ReactNode
}

interface UserProviderContext {
  user: User | undefined
  hasUser: boolean
  createUser(author: string): void
}

export const UserContext = React.createContext<UserProviderContext | undefined>(
  undefined
)

const UserProvider = (props: UserProviderProps) => {
  const { connect, emitMessage } = React.useContext(WebsocketContext)!
  const [user, setUser] = React.useState<User>()
  const hasUser = React.useMemo(() => !!user, [user])

  React.useEffect(() => {
    if (!hasUser) return
    connect(() => emitMessage(mergeAuthorWithUuid(user!)))
  }, [hasUser])

  const createUser = React.useCallback(
    (author: string) => setUser({ author, uuid: uuidv4() }),
    []
  )

  return (
    <UserContext.Provider value={{ user, hasUser, createUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
