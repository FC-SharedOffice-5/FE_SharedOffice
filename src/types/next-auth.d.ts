import { JWT } from 'next-auth/jwt';

export declare module 'next-auth/jwt' {
  interface JWT {
    accessToken: string;
  }
}

export declare module 'next-auth' {
  interface Session {
    accessToken: string;
  }
  interface User {
    accessToken: string;
  }
}
