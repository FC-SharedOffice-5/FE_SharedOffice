import { JWT } from 'next-auth/jwt';

export declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
    refreshToken: string;
  }
}

export declare module 'next-auth' {
  interface Session {
    accessToken: string;
    refreshToken: string;
  }
  interface User {
    accessToken: string;
    refreshToken: string;
  }
}
