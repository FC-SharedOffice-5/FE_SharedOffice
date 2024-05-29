import { queryOptions } from '@tanstack/react-query';

export const employeesOptions = queryOptions({
  queryKey: ['getEmployees'],
  queryFn: async () => {
    const response = await fetch('https://dummy.restapiexample.com/api/v1/employees');

    return response.json();
  },
});
