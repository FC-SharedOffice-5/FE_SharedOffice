import Image from 'next/image';
import LoginForm from './_components/login-form';
import NavLinks from './_components/nav-links';

export default async function LogInPage() {
  return (
    <main className="mx-4 flex h-full flex-col justify-center gap-8">
      <div className="mb-[30px] flex justify-center">
        <Image
          src="/icons/logo.svg"
          alt="로고"
          width={72}
          height={41}
        />
      </div>
      <LoginForm />
      <NavLinks />
    </main>
  );
}
