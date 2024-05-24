'use client';

import Image from 'next/image';
import { ElementType, useState } from 'react';
import { UseFormSetValue, UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import clsx from 'clsx';

type TextInputProps = {
  type?: 'text' | 'number' | 'password';
  label: string;
  name: string;
  placeholder?: string;
  setValue?: UseFormSetValue<FieldValues>;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  validation?: object;
  error?: boolean;
  isDisabled?: boolean;
  suffix?: ElementType;
};

const TextInput = ({
  type = 'text',
  label,
  name,
  placeholder,
  setValue,
  register,
  errors,
  validation,
  error,
  isDisabled = false,
  suffix: SuffixComponent,
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState(type);
  const isErrorPresent = !!errors?.[name];

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <div className="flex w-full flex-col">
      <label
        className={clsx(
          'label-small',
          (isErrorPresent || error) && 'text-error',
          isDisabled && 'text-[#111]/[.4]',
        )}
      >
        {label}
      </label>
      <div className="relative">
        <input
          disabled={isDisabled}
          type={inputType}
          placeholder={placeholder}
          {...register?.(name, validation)}
          onInput={(e) => {
            if (type === 'number') {
              e.currentTarget.value = e.currentTarget.value.slice(0, 6);
            }
            setInputValue(e.currentTarget.value);
          }}
          className={clsx(
            'body-small placeholder:body-small h-10 w-full border-b-[0.75px] border-[#111]/[.4] focus:bg-white focus:outline-none disabled:bg-white disabled:text-[#111]/[.4] data-[focus]:border-[#111]',
            (isErrorPresent || error) && 'border-error data-[focus]:border-error',
          )}
        />
        {setValue && inputValue && !isDisabled && (
          <button
            type="button"
            onClick={() => {
              setValue(name, '');
              setInputValue('');
            }}
            className="absolute bottom-[10px] right-0"
          >
            <Image
              src="/delete.svg"
              alt="전체 삭제"
              width={20}
              height={20}
              className="hover:cursor-pointer"
            />
          </button>
        )}
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute bottom-[10px] right-0"
          >
            <Image
              src={inputType === 'password' ? '/hide.svg' : '/hide-off.svg'}
              alt="비밀번호 보이기/숨기기"
              width={20}
              height={20}
              className="hover:cursor-pointer"
            />
          </button>
        )}
        {SuffixComponent && (
          <div
            className="absolute bottom-[10px] right-0"
            onClick={}
          >
            <SuffixComponent />
          </div>
        )}
      </div>
      {isErrorPresent && (
        <span className="body-small text-error">{errors[name]?.message?.toString()}</span>
      )}
    </div>
  );
};

export default TextInput;
