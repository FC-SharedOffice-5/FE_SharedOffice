'use client';

import Image from 'next/image';
import { ElementType, InputHTMLAttributes, useState } from 'react';
import { UseFormSetValue, UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import clsx from 'clsx';
import { Field, Input, Label } from '@headlessui/react';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  setValue?: UseFormSetValue<FieldValues>;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  validation?: object;
  error?: boolean;
  suffix?: ElementType;
};

const TextInput = ({
  label,
  name,
  setValue,
  register,
  errors,
  validation,
  error,
  suffix: SuffixComponent,
  ...props
}: TextInputProps) => {
  const { type = 'text', disabled = false } = props;
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState(type);
  const isErrorPresent = !!errors?.[name];

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <Field
      disabled={disabled}
      className="relative flex w-full flex-col"
    >
      <Label
        className={clsx(
          'label-small data-[disabled]:text-[#111]/[.4]',
          (isErrorPresent || error) && 'text-error',
        )}
      >
        {label}
      </Label>
      <Input
        {...props}
        {...register?.(name, validation)}
        onInput={(e) => {
          if (type === 'number') {
            e.currentTarget.value = e.currentTarget.value.slice(0, 6);
          }
          setInputValue(e.currentTarget.value);
        }}
        className={clsx(
          'body-small placeholder:body-small h-10 w-full border-b-[0.75px] border-[#111]/[.4] focus:bg-white focus:outline-none data-[focus]:border-[#111] data-[disabled]:bg-white data-[disabled]:text-[#111]/[.4]',
          (isErrorPresent || error) && 'border-error data-[focus]:border-error',
        )}
      />
      {setValue && inputValue && !disabled && (
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
        <div className="absolute bottom-[10px] right-0">
          <SuffixComponent />
        </div>
      )}
      {errors?.[name]?.message && (
        <span className="body-small text-error">{errors[name].message.toString()}</span>
      )}
    </Field>
  );
};

export default TextInput;
