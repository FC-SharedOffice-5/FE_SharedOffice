'use client';

import { useEffect, useMemo } from 'react';
import CheckBox from '@/components/checkbox';
import Divider from '@/components/divider';
import PrimaryButton from '@/components/primary-button';
import List from '@/components/list';
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { requiredItems, optionalItems, TAgreeItems, titleItems } from './constants';
import { useRouter } from 'next/navigation';
import Accordion from '@/components/accordion';
import { useSignupStore } from '@/app/(provider)/signup-provider';

export type TFormValues = {
  all: boolean;
  mile: boolean;
  personal: boolean;
  thirdParty: boolean;
  emailAgree: boolean;
  messageAgree: boolean;
  pushAgree: boolean;
  optional: boolean;
};

export default function SignupPage() {
  const router = useRouter();
  const updateAgreeOptionalOptions = useSignupStore((state) => state.updateAgreeOptionalOptions);
  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      all: false,
      mile: false,
      personal: false,
      thirdParty: false,
      emailAgree: false,
      messageAgree: false,
      pushAgree: false,
      optional: false,
    },
  });

  const values = useWatch({ control });

  const checkAllValues = (allChecked: boolean) => {
    const allValues = [...requiredItems, ...optionalItems, ...titleItems].reduce((acc, item) => {
      acc[item.name as keyof TFormValues] = allChecked;

      return acc;
    }, {} as Partial<TFormValues>);

    reset(allValues);
  };

  useEffect(() => {
    const emailChecked = values.emailAgree;
    const smsChecked = values.messageAgree;
    const appPushChecked = values.pushAgree;
    const mileChecked = values.mile;
    const personalChecked = values.personal;
    const thirdParty = values.thirdParty;

    setValue('optional', (emailChecked && smsChecked && appPushChecked) ?? false);
    setValue(
      'all',
      (emailChecked &&
        smsChecked &&
        appPushChecked &&
        mileChecked &&
        personalChecked &&
        thirdParty) ??
        false,
    );
  }, [
    setValue,
    reset,
    values.emailAgree,
    values.messageAgree,
    values.pushAgree,
    values.mile,
    values.personal,
    values.thirdParty,
  ]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    const { emailAgree, messageAgree, pushAgree } = data;

    updateAgreeOptionalOptions({
      emailAgree,
      messageAgree,
      pushAgree,
    });

    router.push('/signup/user-info');
  };

  const isValid = useMemo(
    () => values.mile && values.personal && values.thirdParty,
    [values.mile, values.personal, values.thirdParty],
  );

  return (
    <main className="flex h-full flex-col items-center justify-between px-4">
      <div />
      <section className="w-full">
        <Controller
          name={titleItems[0].name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <CheckBox
              title="모두 동의"
              onChange={(checked: boolean) => {
                onChange(checked);
                checkAllValues(checked);
              }}
              selected={value}
            />
          )}
        />
        <Divider />
        <List
          items={requiredItems}
          renderItem={(item: TAgreeItems) => (
            <Controller
              key={item.id}
              name={item.name as keyof TFormValues}
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  subTitle={item.subTitle}
                  suffix={item.suffix}
                  onChange={onChange}
                  selected={value}
                />
              )}
            />
          )}
        />
        <Accordion
          header={({ open }) => (
            <Controller
              name={titleItems[1].name}
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  outline={false}
                  subTitle="[선택] 광고성 정보 수신에 동의"
                  suffix={open ? 'minusIcon' : 'plusIcon'}
                  onChange={(checked: boolean) => {
                    onChange(checked);
                    setValue('emailAgree', checked);
                    setValue('messageAgree', checked);
                    setValue('pushAgree', checked);
                  }}
                  selected={value}
                />
              )}
            />
          )}
          panel={() => (
            <List
              items={optionalItems}
              renderItem={(item: TAgreeItems) => (
                <Controller
                  key={item.id}
                  name={item.name as keyof TFormValues}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <CheckBox
                      subTitle={item.subTitle}
                      suffix={item.suffix}
                      onChange={onChange}
                      selected={value}
                    />
                  )}
                />
              )}
            />
          )}
        />
      </section>
      <PrimaryButton
        handleClick={handleSubmit(onSubmit)}
        disabled={!isValid}
        name="다음으로"
      />
    </main>
  );
}
