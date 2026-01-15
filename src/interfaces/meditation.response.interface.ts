import type { Meditation } from './meditation.interface'

export interface MeditationResponse {
  data: {
    meditations: Array<Meditation>
  }
  status: string
}
