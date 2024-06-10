export type DataType = {
  officeId: number;
  officeName: string;
  officeAddr: string;
  officeFloor: number;
  officeTime: string;
  officeCapacity: number;
  officeStudio: number;
  officeMeeting: number;
  officeLatitude: string;
  officeLongitude: string;
  officeFacilities: string;
  memberLike: boolean;
  createdAt: string;
  updatedAt: string;
};

export const data: DataType[] = [
  {
    officeId: 1,
    officeName: '가산점',
    officeAddr: '서울 구로구 디지털로',
    officeFloor: 2,
    officeTime: '24시간',
    officeCapacity: 300,
    officeStudio: 1,
    officeMeeting: 12,
    officeLatitude: '37.503043',
    officeLongitude: '127.041588',
    officeFacilities: '스튜디오, 회의실, 라운지, 미니부스',
    memberLike: true,
    createdAt: '2024-06-01T14:42:29.144299',
    updatedAt: '2024-06-01T14:42:29.144299',
  },
  {
    officeId: 2,
    officeName: '성수1호점',
    officeAddr: '서울 구로구 디지털로',
    officeFloor: 2,
    officeTime: '24시간',
    officeCapacity: 300,
    officeStudio: 1,
    officeMeeting: 12,
    officeLatitude: '37.503043',
    officeLongitude: '127.041588',
    officeFacilities: '스튜디오, 회의실, 라운지, 미니부스',
    memberLike: true,
    createdAt: '2024-06-01T14:42:29.144299',
    updatedAt: '2024-06-01T14:42:29.144299',
  },
  {
    officeId: 3,
    officeName: '서울숲점',
    officeAddr: '서울 구로구 디지털로',
    officeFloor: 2,
    officeTime: '24시간',
    officeCapacity: 300,
    officeStudio: 1,
    officeMeeting: 12,
    officeLatitude: '37.503043',
    officeLongitude: '127.041588',
    officeFacilities: '스튜디오, 회의실, 라운지, 미니부스',
    memberLike: true,
    createdAt: '2024-06-01T14:42:29.144299',
    updatedAt: '2024-06-01T14:42:29.144299',
  },
  {
    officeId: 4,
    officeName: '강남구청점',
    officeAddr: '서울 구로구 디지털로',
    officeFloor: 2,
    officeTime: '24시간',
    officeCapacity: 300,
    officeStudio: 1,
    officeMeeting: 12,
    officeLatitude: '37.503043',
    officeLongitude: '127.041588',
    officeFacilities: '스튜디오, 회의실, 라운지, 미니부스',
    memberLike: false,
    createdAt: '2024-06-01T14:42:29.144299',
    updatedAt: '2024-06-01T14:42:29.144299',
  },
  {
    officeId: 5,
    officeName: '신사점',
    officeAddr: '서울 구로구 디지털로',
    officeFloor: 2,
    officeTime: '24시간',
    officeCapacity: 300,
    officeStudio: 1,
    officeMeeting: 12,
    officeLatitude: '37.503043',
    officeLongitude: '127.041588',
    officeFacilities: '스튜디오, 회의실, 라운지, 미니부스',
    memberLike: false,
    createdAt: '2024-06-01T14:42:29.144299',
    updatedAt: '2024-06-01T14:42:29.144299',
  },
];

export const locations = data.map(({ officeId, officeLatitude, officeLongitude }) => ({
  id: officeId,
  location: { lat: Number(officeLatitude), lng: Number(officeLongitude) },
}));
