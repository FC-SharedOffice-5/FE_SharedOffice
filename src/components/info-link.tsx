import Link from 'next/link';
import NavRightIcon from '@/assets/icons/nav-right-icon'; // 아이콘 경로를 실제 경로로 변경하세요

type InfoLinkProps = {
  heading: string;
  content: string;
  path: string;
};

const InfoLink = ({ heading, content, path }: InfoLinkProps) => {
  return (
    <Link
      className="border-b"
      href={path}
    >
      <div className="my-1 rounded-sm transition duration-200 hover:rounded-sm hover:bg-gray-100">
        <div className="body-small p-1 text-black/40">{heading}</div>
        <div className="mt-2 flex items-center justify-between px-1">
          <span className="label-large">{content}</span>
          <NavRightIcon />
        </div>
      </div>
    </Link>
  );
};

export default InfoLink;
