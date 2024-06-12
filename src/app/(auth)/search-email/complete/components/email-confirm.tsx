import { useSearchParams } from 'next/navigation';

const EmailConfirm = () => {
  const params = useSearchParams();
  const email = params.get('email') || 'test@example.com';

  return (
    <div className="flex flex-col gap-4">
      <p className="label-small data-[disabled]:text-[#111]/[.4]">이메일 주소</p>
      <p className="body-small placeholder:body-small h-6 w-full border-b-[0.75px] border-[#111]/[.4]">
        {email}
      </p>
    </div>
  );
};

export default EmailConfirm;
