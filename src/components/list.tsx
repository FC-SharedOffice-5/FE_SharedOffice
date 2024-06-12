'use client';

import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  className?: string;
};

const List = <T,>({ items, renderItem, className }: ListProps<T>) => {
  return (
    <ul className={cn('divide-y-[16px] divide-white', className)}>
      {items.map((item, index) => {
        return renderItem(item);
      })}
    </ul>
  );
};

export default List;
