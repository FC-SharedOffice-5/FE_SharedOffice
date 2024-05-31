import clsx from 'clsx';
import Title from './title';

type ListProps = {
  data: {
    date: string;
    office: string;
    list: {
      id: number;
      floor: string;
      number: string;
      count?: number;
      startHour: string;
      endHour: string;
    }[];
  }[];
  label: string;
};

const List = ({ data, label }: ListProps) => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {data.map((item) => {
        return (
          <div
            key={item.date}
            className="flex flex-col gap-2"
          >
            <Title
              name={item.office}
              date={item.date}
            />
            <div className="my-4 flex flex-col">
              <span className="body-small text-black/40">{label}</span>
              <table className="table border-separate border-spacing-y-2 text-black">
                <tbody>
                  {item.list.map((item) => (
                    <tr
                      key={item.id}
                      className="label-small"
                    >
                      <td className={clsx('text-start', item.count ? 'w-1/3' : 'w-1/2')}>
                        {item.floor}·{item.number}
                      </td>
                      {item.count && <td className="w-1/3 text-center">{item.count}명</td>}
                      <td className={clsx('w-1/2 text-end', item.count ? 'w-1/3' : 'w-1/2')}>
                        {item.startHour}-{item.endHour}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
