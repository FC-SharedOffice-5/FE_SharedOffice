import Link from 'next/link';
import React from 'react';

export default function NavLinkList() {
  const links = [
    { href: '/signup', name: '이메일 가입' },
    { href: '/search-email', name: '이메일 찾기' },
    { href: '/search-password', name: '비밀번호 찾기' },
  ];

  return (
    <nav>
      <ul className="flex items-center justify-center gap-1">
        {links.map((link, index) => (
          <React.Fragment key={index}>
            <li className="px-[15.5px] py-2">
              <Link href={link.href}>
                <div className="body-small text-center">{link.name}</div>
              </Link>
            </li>
            {index < links.length - 1 && <div className="h-4 w-px bg-black"></div>}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
}
