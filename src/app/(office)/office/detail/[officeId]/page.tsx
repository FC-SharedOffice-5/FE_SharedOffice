import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/header';
import PrimaryButton from '@/components/primary-button';
import StarIcon from '@/assets/icons/star-icon';
import LocationIcon from '@/assets/icons/location-icon';
import ClockIcon from '@/assets/icons/clock-icon';
import PhoneIcon from '@/assets/icons/phone-icon';

export default function Detail() {
  const office = {
    officeId: 9,
    officeName: '성수1호점',
    officeAddr: '서울 성동구 아차산로 68 에이유타워',
    officeFloor: 2,
    officeTime: '24시간',
    officeCapacity: 300,
    officeStudio: 1,
    officeMeeting: 12,
    officeLatitude: '37.503043',
    officeLongitude: '127.041588',
    officeFacilities: ['스튜디오', '회의실', '라운지', '미니부스'],
    officePhone: '1522-5555',
    memberLike: false,
  };

  return (
    <>
      <Header title={office.officeName} />
      <div className="relative h-60 w-full">
        <Image
          src="/office.svg"
          layout="fill"
          objectFit="cover"
          alt="오피스 이미지"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 p-4">
        <div className="flex items-center justify-between">
          <span className="title-large text-black">Mile {office.officeName}</span>
          {office.memberLike ? <StarIcon /> : <StarIcon color="white" />}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <LocationIcon />
            <span className="label-small text-gray-700">{office.officeAddr}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon />
            <span className="label-small text-gray-700">{office.officeTime} 운영</span>
          </div>
          <div className="flex items-center gap-1">
            <PhoneIcon />
            <span className="label-small text-gray-700">{office.officePhone}</span>
          </div>
        </div>
        <p className="text-sm leading-[22px] text-black">
          성수역에서 도보3분 거리에 위치한 오피스로 5-12층을 사용 중이며, 바리스타가 상주하는 카페와
          편안한 라운지가 갖춰져 있습니다. 책상 위 태블릿에 QR을 인식하면 가상 데스크톱 환경과
          연동돼 평소에 사용하는 PC와 동일한 환경에서 업무를 할 수 있습니다. 4개의 촬영 스튜디오와
          1600개가 넘는 자율석에서 원하는 업무 스타일을 찾아보세요.
        </p>
      </div>
      <div className="h-2 w-full bg-background" />
      <div className="flex flex-col gap-8 p-4">
        <div className="flex flex-col gap-4">
          <span className="title-small border-b-[0.75px] border-black py-2 text-black">
            편의 시설
          </span>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/lounge.svg"
                  alt="오피스 이미지"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="body-small text-center text-black">라운지</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/massage-chair.svg"
                  alt="오피스 이미지"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="body-small text-center text-black">안마의자</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/terrace.svg"
                  alt="오피스 이미지"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="body-small text-center text-black">테라스</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/3D-printer.svg"
                  alt="오피스 이미지"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="body-small text-center text-black">3D프린터</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            href="/office/1"
            className="grow"
          >
            <PrimaryButton
              color="white"
              name="공간 예약"
            />
          </Link>
          <Link
            href="/office/1"
            className="grow"
          >
            <PrimaryButton
              color="white"
              name="좌석 예약"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
