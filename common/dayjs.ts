import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import relativeTime from 'dayjs/plugin/relativeTime'
import calendar from 'dayjs/plugin/calendar'
import updateLocale from 'dayjs/plugin/updateLocale'
import 'dayjs/locale/pt-br'

dayjs.extend(updateLocale)
dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale('pt-br')
dayjs.tz.setDefault('America/Sao_Paulo')
dayjs.extend(calendar)

dayjs.updateLocale('pt-br', {
  calendar: {
    lastDay: '[Ontem às] h:mm A',
    sameDay: '[Hoje às] h:mm A',
    lastWeek: 'dddd [às] h:mm A',
    sameElse: 'DD/MM/YYYY [às] h:mm A',
  },
})

export default dayjs
