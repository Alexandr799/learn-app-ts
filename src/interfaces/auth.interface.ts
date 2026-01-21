import type { ProfileShort } from './profile.short.interface'

export interface AuthResponse {
  data: {
    token: string
    user: ProfileShort
  }
  message: string
  status: string
}
