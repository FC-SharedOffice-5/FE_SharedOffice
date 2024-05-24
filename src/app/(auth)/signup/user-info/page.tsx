'use client';

import ChevronDownIcon from '@/assets/icons/ChevronDownIcon';
import TextInput from '@/components/text-input';
import { useForm } from 'react-hook-form';

export default function UserInfoPage() {
  const {
    register,
    watch,
    formState: { errors },
    setValue,
  } = useForm({ mode: 'onChange' });

  return (
    <main className={`flex h-full flex-col items-center justify-between px-4`}>
      <form>
        <TextInput
          type="text"
          label="이름"
          name="email"
          placeholder="예) mile@mile.co.kr"
          setValue={setValue}
          register={register}
          errors={errors}
        />
        <TextInput
          type="text"
          label="생년월일"
          name="email"
          placeholder="1970.01.01"
          setValue={setValue}
          register={register}
          errors={errors}
          suffix={() => <ChevronDownIcon />}
        />
      </form>
    </main>
  );
}
