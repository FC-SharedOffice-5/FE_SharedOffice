'use client';

import CheckBox, { TCheckBoxProps } from '@/components/CheckBox';
import Divider from '@/components/Divider';
import PrimaryButton from '@/components/primary-button';
import List from '@/components/List';
import Accordion from '@/components/Accordion';

export default function SignUpPage() {
  const items: (TCheckBoxProps & { id: number })[] = [
    { id: 2, outline: false, subTitle: '[필수] 마일 이용약관 동의', suffix: 'contentLink' },
    {
      id: 3,
      outline: false,
      subTitle: '[필수] 개인 정보 수집 및 이용 동의',
      suffix: 'contentLink',
    },
    { id: 4, outline: false, subTitle: '[필수] 개인 정보 제 3자 제공 동의', suffix: 'contentLink' },
  ];

  const subItems: (TCheckBoxProps & { id: number })[] = [
    { id: 5, outline: false, subTitle: '이메일', suffix: 'contentLink' },
    { id: 6, outline: false, subTitle: '문자 메세지', suffix: 'contentLink' },
    { id: 7, outline: false, subTitle: '앱 푸시', suffix: 'contentLink' },
  ];

  return (
    <>
      <main className="flex h-full flex-col items-center justify-between px-4">
        <div />
        <section className="w-full">
          <CheckBox title="모두 동의" />
          <Divider className="mb-3 mt-2 h-[1px] w-full bg-black" />
          <List
            items={items}
            renderItem={(item: TCheckBoxProps & { id: number }) => (
              <CheckBox
                key={item.id}
                {...item}
              />
            )}
          />
          <Accordion
            header={() => (
              <CheckBox
                outline={false}
                subTitle="[선택] 광고성 정보 수신에 동의"
                suffix="plusIcon"
              />
            )}
            panel={() => (
              <List
                items={subItems}
                renderItem={(item: TCheckBoxProps & { id: number }) => (
                  <CheckBox
                    key={item.id}
                    {...item}
                  />
                )}
              />
            )}
          />
        </section>
        <PrimaryButton
          color="green"
          name="다음"
        />
      </main>
    </>
  );
}
