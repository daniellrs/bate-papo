import dayjs from 'dayjs'

export type User = {
  author: string
  uuid: string
}

export type MessageData = {
  uuid: string
  author: string
  color: string
  text: string
  time: dayjs.Dayjs
}

export type Message = {
  type: string
  data: MessageData | MessageData[]
}

export type Participant = {
  uuid: string
  author: string
  color: string
  time: dayjs.Dayjs
}
