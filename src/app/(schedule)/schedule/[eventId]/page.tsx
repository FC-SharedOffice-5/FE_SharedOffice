import PrimaryButton from '@/components/primary-button';

export default function ScheduleDetailPage() {
  return (
    <main className="flex w-full flex-1 flex-col">
      {/* 사진 및 색상 */}
      <div className="h-[120px] bg-gray">사진 및 색상</div>

      <div className="flex flex-1 flex-col justify-between gap-10 px-4">
        <div className="flex flex-1 flex-col gap-4 pt-6">
          {/* 제목 */}
          <div className="h-[56px] bg-background">제목</div>

          {/* 시간 */}
          <div className="h-[56px] bg-gray">시간</div>

          {/* 참석 인원 */}
          <div className="h-[112px] bg-background">참석 인원</div>

          {/* 예약 정보 */}
          <div className="h-[112px] bg-gray">예약 정보</div>

          {/* 메모 */}
          <div className="h-[88px] bg-background">메모</div>
        </div>

        <PrimaryButton name="저장" />
      </div>
    </main>
  );
}
