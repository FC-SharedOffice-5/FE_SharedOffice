import { DataType } from '../constants';
import StarIcon from '@/assets/icons/star-icon';
import PedestrianIcon from '@/assets/icons/pedestrian-icon';
import CapacityIcon from '@/assets/icons/capacity-icon';
import FacilityIcon from '@/assets/icons/facility-icon';

type OfficeItemProps = {
  data: DataType;
};

const OfficeItem = ({ data }: OfficeItemProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between border-b-[0.75px] border-black">
        <span className="label-large text-black">Mile {data.officeName}</span>
        <button>{data.memberLike ? <StarIcon /> : <StarIcon color="white" />}</button>
      </div>
      <div className="body-small flex flex-col gap-1 text-gray-700">
        <div className="flex items-center gap-1">
          <PedestrianIcon />
          걸어서 5분
        </div>
        <div className="flex items-center gap-1">
          <CapacityIcon />
          수용인원 {data.officeCapacity}인
        </div>
        <div className="flex items-center gap-1">
          <FacilityIcon />
          {data.officeFacilities}
        </div>
      </div>
    </div>
  );
};

export default OfficeItem;
