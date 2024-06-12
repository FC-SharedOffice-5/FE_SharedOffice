import NextAuth, { CredentialsSignin } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
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

          const data = await res.json();

          if (res.ok) {
            const accessToken = res.headers.get('set-cookie')?.match(/accessToken=(.*?);/)?.[1];
            if (accessToken) {
              data.accessToken = accessToken;

              return data;
            }
          }

          if (res.status === 404) {
            throw new CredentialsSignin({
              cause: 'not_user',
            });
          }
        } catch (error) {
          if (error instanceof CredentialsSignin) {
            throw error;
          }

          throw new Error('로그인에 실패했습니다.');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24시간 동안 로그인 상태 유지
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.accessToken;
      }

      return token;
    },
    session: async ({ session, token }) => {
      if (token?.accessToken) {
        session.accessToken = token.accessToken;
      }

      return session;
    },
  },
});
