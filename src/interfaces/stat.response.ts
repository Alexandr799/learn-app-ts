import type { Stat } from './stat.interface'

export interface StatResponse {
  data: {
    stat: Stat
  }
  message: string
  status: string
}
