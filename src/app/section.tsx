'use client';

import { employeesOptions } from '@/actions/query-options';
import { useSuspenseQuery } from '@tanstack/react-query';

const Section = () => {
  const { data } = useSuspenseQuery(employeesOptions);

  return (
    <>
      {data?.data?.map((employee: any) => {
        return (
          <p
            style={{ color: 'gray' }}
            key={employee.id}
          >
            {employee.employee_name}
          </p>
        );
      })}
    </>
  );
};

export default Section;
