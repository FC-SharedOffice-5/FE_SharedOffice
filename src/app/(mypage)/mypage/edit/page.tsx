'use client';

import Header from '@/components/header';
import CheckBox from '@/components/checkbox';
import PrimaryButton from '@/components/primary-button';
import Input from '../../_components/input';
import DefaultImage from '@/assets/icons/default-image';
import EditIcon from '@/assets/icons/edit-icon';

export default function Edit() {
  const info = {
    name: '오주하',
    birth: '1997.05.14',
    nickname: '765 주하',
    email: 'abc@gmail.com',
    emailAgree: true,
    messageAgree: true,
  };

  return (
    <main>
      <Header title="회원정보 수정" />
      <div className="flex flex-col gap-4 p-4">
        <div className="flex justify-center pb-2 pt-10">
          <div className="relative">
            <DefaultImage />
            <div className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-gray-600">
              <EditIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="title-medium border-b-[0.75px] border-black py-2 text-black">
            회원 정보
          </div>
          <div className="flex justify-between gap-4">
            <Input
              label="이름"
              defaultValue={info.name}
            />
            <Input
              label="생년월일"
              defaultValue={info.birth}
            />
          </div>
          <div className="relative">
            <Input
              label="닉네임"
              defaultValue={info.nickname}
            />
            <div className="absolute bottom-2 right-2">
              <EditIcon color="gray" />
            </div>
          </div>
          <Input
            label="이메일"
            defaultValue={info.email}
            isDisabled={true}
          />
        </div>
        <div className="h-2 w-full bg-background" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <CheckBox
              subTitle="[선택] 광고성 정보 수신에 동의"
              onChange={() => {}}
              selected={info.emailAgree && info.messageAgree ? true : false}
            />
            <div className="my-2 h-[0.75px] bg-black" />
            <div className="flex justify-between gap-4">
              <div className="grow">
                <CheckBox
                  subTitle="이메일"
                  onChange={() => {}}
                  selected={info.emailAgree}
                />
              </div>
              <div className="grow">
                <CheckBox
                  subTitle="문자 메시지"
                  onChange={() => {}}
                  selected={info.messageAgree}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="caption-small my-2 text-black/40">
              중요 안내사항은 위 수신 여부와 관계없이 발송됩니다.
              <br />앱 푸시 알림은 Mile 앱 &gt; MY &gt; 설정에서 알림을 끌 수 있습니다.
            </span>
            <div>
              <button className="body-small cursor-pointer text-primary">
                푸시 알림 수신 설정
              </button>
            </div>
            <div>
              <button className="body-small cursor-pointer text-error">회원 탈퇴</button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <PrimaryButton name="저장하기" />
        </div>
      </div>
    </main>
  );
}
