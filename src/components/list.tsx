'use client';

import type { ReactNode } from 'react';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return (
    <ul className="divide-y-[16px] divide-white">
      {items.map((item, index) => {
        return renderItem(item);
      })}
    </ul>
  );
};

export default List;
