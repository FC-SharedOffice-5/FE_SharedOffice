import { ScheduleData } from '@/types/data';
import { ApiResponse } from '@/types/interface';
import { MutationOptions } from '@tanstack/react-query';
import { useApiMutation } from './use-api-mutation';

export const useCreateSchedule = (
  options?: MutationOptions<
    ApiResponse<ScheduleData>,
    Pick<ApiResponse<ScheduleData>, 'errorMessage'>,
    ScheduleData
  >,
) => {
  return useApiMutation<
    ApiResponse<ScheduleData>,
    Pick<ApiResponse<ScheduleData>, 'errorMessage'>,
    ScheduleData
  >({
    url: '/schedules',
    ...options,
  });
};
