import { User } from '../interfaces'
import { UUID_SEPARATOR } from './constants'

export const mergeAuthorWithUuid = (user: User) =>
  `${user?.author}${UUID_SEPARATOR}${user?.uuid}`

export const splitAuthorWithUuid = (authorWithUuid: string) => {
  const uuidSeparatorIndex = authorWithUuid.lastIndexOf(UUID_SEPARATOR)
  const author = authorWithUuid.substring(0, uuidSeparatorIndex)
  const uuid = authorWithUuid.substring(
    uuidSeparatorIndex + UUID_SEPARATOR.length
  )

  return { author, uuid }
}
