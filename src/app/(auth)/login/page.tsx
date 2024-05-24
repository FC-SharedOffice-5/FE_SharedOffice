import Image from 'next/image';
import LoginForm from './_components/LoginForm';
import NavLinkList from './_components/NavLinkList';

export default async function SignInPage() {
  return (
    <main className="mx-4 flex h-full flex-col justify-center gap-8">
      <div className="mb-[30px] flex justify-center">
        <Image
          src="icons/logo.svg"
          alt="로고"
          width={72}
          height={41}
        />
      </div>
      <LoginForm />
      <NavLinkList />
    </main>
  );
}
