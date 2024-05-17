import NextAuth, { CredentialsSignin } from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    credentials({
      authorize: async (credentials) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/login`, {
          cache: 'no-store',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
        });

        const { code, accessToken, refreshToken } = await res.json();

        if (res.ok && code === 200) {
          return {
            accessToken,
            refreshToken,
          };
        }
        throw new CredentialsSignin({
          cause: code || '문제가 발생했습니다.',
        });
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token?.accessToken && token?.refreshToken) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
      }

      return session;
    },
  },
});
