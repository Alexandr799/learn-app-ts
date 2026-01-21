import type { Profile } from "./profile.interface"

export interface AuthResponse {
  data: {
    token: string
    user: Profile
  }
  message: string
  status: string
}
