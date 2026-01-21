import type { ProfileShort } from './profile.short.interface'

export interface RegistrationResponse {
  data: ProfileShort
  message: string
  status: string
}
