'use client';

import { useEffect, useMemo } from 'react';
import CheckBox from '@/components/CheckBox';
import Divider from '@/components/Divider';
import PrimaryButton from '@/components/PrimaryButton';
import List from '@/components/List';
import Accordion from '@/components/Accordion';
import { Controller, SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { requiredItems, optionalItems, TAgreeItems, titleItems } from './constants';
import { useRouter } from 'next/navigation';

export type TFormValues = {
  all: boolean;
  mile: boolean;
  personal: boolean;
  thirdParty: boolean;
  email: boolean;
  sms: boolean;
  appPush: boolean;
  optional: boolean;
};

export default function SignUpPage() {
  const router = useRouter();
  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      all: false,
      mile: false,
      personal: false,
      thirdParty: false,
      email: false,
      sms: false,
      appPush: false,
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
    const emailChecked = values.email;
    const smsChecked = values.sms;
    const appPushChecked = values.appPush;

    const optionalAllChecked: boolean = (emailChecked && smsChecked && appPushChecked) ?? false;
    setValue('optional', optionalAllChecked);
  }, [setValue, reset, values.email, values.sms, values.appPush]);

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    router.push('/signup/user-info');
  };

  const isValid = useMemo(
    () => values.mile && values.personal && values.thirdParty,
    [values.mile, values.personal, values.thirdParty],
  );

  return (
    <>
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
          <Divider className="mb-3 mt-2 h-[1px] w-full bg-black" />
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
                      setValue('email', checked);
                      setValue('sms', checked);
                      setValue('appPush', checked);
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
    </>
  );
}
