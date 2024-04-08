export type AuthResponse = {
  token: string;
  username: string;
  authenticated: boolean;
  created: Date;
  expiration: Date;
  refreshToken: string;
}
