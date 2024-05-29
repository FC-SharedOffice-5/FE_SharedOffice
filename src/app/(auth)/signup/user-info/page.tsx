'use client';

import ChevronDownIcon from '@/assets/icons/chevron-down-Icon';
import PrimaryButton from '@/components/primary-button';
import Input from '@/components/input';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCallback, useState } from 'react';
import GenderSelectModal from './_components/gender-select-modal';
import { useRouter } from 'next/navigation';
import { useSignupStore } from '@/app/(provider)/signup-provider';
import { SignupData } from '@/types/data';

export type TFormValues = Pick<SignupData, 'memberName' | 'memberBirth'>;

export type GenderType = '남성' | '여성' | '';

export default function UserInfoPage() {
  const router = useRouter();
  const updateUserInfo = useSignupStore((state) => state.updateUserInfo);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState<GenderType>('');

  const {
    formState: { errors, isValid },
    control,
    handleSubmit,
  } = useForm<TFormValues>();

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    const { memberName, memberBirth } = data;

    updateUserInfo({
      memberName,
      memberGender: selectedGender === '남성' ? true : false,
      memberBirth,
    });

    router.push('/signup/email-verification');
  };

  const handleGenderClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleSelectGender = useCallback((gender: GenderType) => {
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
            name="memberName"
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
            pattern: {
              value: /^\d{4}\.\d{2}\.\d{2}$/,
            },
          }}
          label="생년월일"
          name="memberBirth"
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
