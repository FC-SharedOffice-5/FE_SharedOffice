import Link from 'next/link';
import NextIcon from '@/assets/icons/next-icon';

const Seat = () => {
  const floors = [
    {
      floor: 5,
      capacity: 280,
      remains: 157,
    },
    {
      floor: 6,
      capacity: 280,
      remains: 157,
    },
    {
      floor: 7,
      capacity: 280,
      remains: 157,
    },
    {
      floor: 8,
      capacity: 280,
      remains: 157,
    },
  ];

  return (
    <div className="flex flex-col gap-1">
      {floors.map((el) => (
        <Link
          key={el.floor}
          href={`/office/reservation?id=1&floor=${el.floor}`}
          className="flex items-center justify-between border-b-[0.75px] border-black py-2"
        >
          <div className="flex flex-col">
            <span className="title-large text-black">{el.floor}F</span>
            <span className="body-medium text-black/40">
              <span className="text-primary">{el.remains}</span>/{el.capacity}석
            </span>
          </div>
          <NextIcon />
        </Link>
      ))}
    </div>
  );
};

export default Seat;
