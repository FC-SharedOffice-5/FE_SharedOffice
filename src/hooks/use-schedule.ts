import { ScheduleData, ScheduleItemData } from '@/types/data';
import { ApiResponse } from '@/types/interface';
import { MutationOptions } from '@tanstack/react-query';
import { useApiMutation, useApiQuery } from './use-api-mutation';

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

export const useGetSchedule = ({
  options,
  params,
}: {
  options?: MutationOptions<
    ApiResponse<ScheduleItemData>,
    Pick<ApiResponse<ScheduleItemData>, 'errorMessage'>,
    undefined
  >;
  params: { eventId: string };
}) => {
  return useApiQuery<ApiResponse<ScheduleItemData>, ApiResponse<ScheduleItemData>>({
    url: `/schedules/${params.eventId}`,
    ...options,
  });
};

export const useGetSchedules = (
  options?: MutationOptions<
    ApiResponse<ScheduleItemData[]>,
    Pick<ApiResponse<ScheduleItemData[]>, 'errorMessage'>,
    undefined
  >,
) => {
  return useApiQuery<ApiResponse<ScheduleItemData[]>, ApiResponse<ScheduleItemData[]>>({
    url: '/schedules',
    ...options,
  });
};
