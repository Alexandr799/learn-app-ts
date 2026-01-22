import type { StatDay } from './stat.day.interface'

export interface StatDayResponse {
  data: {
    stat: StatDay
  }
  message: string
  status: string
}
