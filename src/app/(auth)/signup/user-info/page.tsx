'use client';

import ChevronDownIcon from '@/assets/icons/ChevronDownIcon';
import PrimaryButton from '@/components/PrimaryButton';
import Input from '@/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCallback, useState } from 'react';
import GenderSelectModal from './_components/GenderSelectModal';
import { useRouter } from 'next/navigation';

export type TFormValues = {
  name: string;
  gender: string;
  birth: string;
};

export default function UserInfoPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('');

  const {
    formState: { errors, isValid },
    control,
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    router.push('/signup/email-verification');
  };

  const handleGenderClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleSelectGender = useCallback((gender: string) => {
    setSelectedGender(gender);
    setIsModalOpen(false);
  }, []);

  return (
    <main className={`flex h-full flex-col items-center justify-between px-4`}>
      <div />
      <form className="flex w-full flex-col gap-10">
        <div className="flex gap-2">
          <Input
            control={control}
            validation={{
              required: true,
            }}
            label="이름"
            name="name"
            placeholder="홍길동"
          />
          <div className="flex w-full flex-col">
            <label className="label-small">성별</label>
            <div
              className="body-small placeholder:body-small flex h-10 w-full cursor-pointer items-center justify-between border-b-[0.75px] border-[#111]/[.4]"
              onClick={handleGenderClick}
            >
              <span>{selectedGender || '성별을 선택하세요.'}</span>
              <ChevronDownIcon />
            </div>
          </div>
        </div>
        <Input
          control={control}
          validation={{
            required: true,
          }}
          label="생년월일"
          name="birth"
          maxLength={8}
          placeholder="1970.01.01"
        />
      </form>
      <PrimaryButton
        disabled={!(isValid && selectedGender)}
        name="다음으로"
        handleClick={handleSubmit(onSubmit)}
      />
      <GenderSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelect={handleSelectGender}
      />
    </main>
  );
}
