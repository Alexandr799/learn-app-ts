import type { Profile } from "./profile.interface";

export interface ProfileResponse {
  data: {
    user: Profile;
  };
  status: string;
}
