'use client';

import CommunityIcon from '@/assets/icons/community-icon';
import HomeIcon from '@/assets/icons/home-icon';
import MyPageIcon from '@/assets/icons/mypage-icon';
import OfficeIcon from '@/assets/icons/office-icon';
import ScheduleIcon from '@/assets/icons/schedule-icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const value = usePathname();

  const isHome = value === '/';
  const isOffice = value === '/office';
  const isCommunity = value === '/community';
  const isSchedule = value === '/schedule';
  const isMy = value === '/mypage';

  return (
    <div className="fixed bottom-0 w-full max-w-[500px] border-t border-[#EFEFEF] bg-white pt-1">
      <div className="flex items-center justify-around py-2">
        <Link
          className="flex flex-col items-center"
          href="/"
        >
          <HomeIcon color={isHome ? '#1DCC9A' : '#A0A0A0'} />
          <div className={`caption-small ${isHome ? 'text-black' : 'text-black/40'}`}>홈</div>
        </Link>
        <Link
          className="flex flex-col items-center"
          href="/office"
        >
          <OfficeIcon color={isOffice ? '#1DCC9A' : '#A0A0A0'} />
          <div className={`caption-small ${isOffice ? 'text-black' : 'text-black/40'}`}>오피스</div>
        </Link>
        <Link
          className="flex flex-col items-center"
          href="/community"
        >
          <CommunityIcon color={isCommunity ? '#1DCC9A' : '#A0A0A0'} />
          <div className={`caption-small ${isCommunity ? 'text-black' : 'text-black/40'}`}>
            커뮤니티
          </div>
        </Link>
        <Link
          className="flex flex-col items-center"
          href="/schedule"
        >
          <ScheduleIcon color={isSchedule ? '#1DCC9A' : '#A0A0A0'} />
          <div className={`caption-small ${isSchedule ? 'text-black' : 'text-black/40'}`}>일정</div>
        </Link>
        <Link
          className="flex flex-col items-center"
          href="/mypage"
        >
          <MyPageIcon color={isMy ? '#1DCC9A' : '#A0A0A0'} />
          <div className={`caption-small ${isMy ? 'text-black' : 'text-black/40'}`}>MY</div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
