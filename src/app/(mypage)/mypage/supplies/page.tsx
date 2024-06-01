import clsx from 'clsx';
import Title from '../../_components/title';
import Status from '../../_components/status';

export default function Supplies() {
  const suppliesArray = [
    {
      date: '2024.05.10',
      office: 'Mile 용산',
      supplies: [
        {
          name: '포터블 모니터',
          count: 1,
          isUsing: true,
        },
        {
          name: '무선 헤드셋',
          count: 1,
          isUsing: true,
        },
        {
          name: '빔프로젝터',
          count: 1,
          isUsing: false,
        },
      ],
    },
    {
      date: '2024.05.09',
      office: 'Mile 서울역',
      supplies: [
        {
          name: '무선 헤드셋',
          count: 1,
          isUsing: false,
        },
        {
          name: 'C타입 충전기',
          count: 1,
          isUsing: false,
        },
      ],
    },
  ];

  return (
    <main>
      <div className="flex flex-col gap-6 p-4">
        {suppliesArray.map((item) => {
          return (
            <div
              key={item.date}
              className="flex flex-col gap-4"
            >
              <Title
                name={item.office}
                date={item.date}
              />
              <table className="table border-separate border-spacing-y-2 text-black">
                <tbody>
                  {item.supplies.map((item) => (
                    <tr
                      key={item.name}
                      className="label-small"
                    >
                      <td
                        className={clsx(
                          'body-small w-1/3 text-start',
                          item.isUsing ? 'text-black' : 'text-black/40',
                        )}
                      >
                        {item.name}
                      </td>
                      <td
                        className={clsx(
                          'body-small w-1/3 text-center',
                          item.isUsing ? 'text-black' : 'text-black/40',
                        )}
                      >
                        {item.count}EA
                      </td>
                      <td className="w-1/3">
                        <div className="flex justify-end">
                          <Status
                            name="대여"
                            isUsing={item.isUsing}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </main>
  );
}
