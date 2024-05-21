import { signInWithCredentials } from '@/actions/auth';

export default async function SignInPage() {
  return (
    <>
      <form action={signInWithCredentials}>
        <label>
          이메일
          <input
            type="email"
            name="email"
          />
        </label>
        <label>
          비밀번호
          <input
            type="password"
            name="password"
          />
        </label>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
    </>
  );
}
