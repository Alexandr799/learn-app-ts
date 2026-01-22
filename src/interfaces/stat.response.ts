import type { StatDay } from './stat.day.interface'
import type { StatSummary } from './stat.summary'

export interface StatResponse {
  data: {
    stats: Array<StatDay>
    summary: StatSummary
  }
  status: string
}
