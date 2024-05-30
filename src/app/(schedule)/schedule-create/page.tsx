import PrimaryButton from '@/components/primary-button';

export default function ScheduleCreatePage() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-between gap-8 px-4">
      <form className="flex w-full flex-1 flex-col gap-4 pt-4">
        {/* 제목 및 색상 */}
        <div className="flex h-[128px] flex-col">
          <div className="flex-1 bg-background">제목</div>
          <div className="flex-1 bg-gray">색상</div>
        </div>

        {/* 날짜 및 시간 */}
        <div className="h-[546px] bg-background">날짜 및 시간</div>

        {/* 참석 인원 */}
        <div className="h-[112px] bg-gray">참석 인원</div>

        {/* 위치 */}
        <div className="h-[96px] bg-background">위치</div>

        {/* 메모 */}
        <div className="h-[56px] bg-gray">메모</div>
      </form>
      <PrimaryButton name="저장" />
    </main>
  );
}
