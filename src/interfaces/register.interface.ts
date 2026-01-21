import type { Profile } from "./profile.interface";


export interface RegistrationResponse {
  data: Profile;
  message: string;
  status: string;
}
