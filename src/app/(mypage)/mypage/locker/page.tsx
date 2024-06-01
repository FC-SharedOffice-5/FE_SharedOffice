import clsx from 'clsx';
import Title from '../../_components/title';
import Status from '../../_components/status';

export default function Locker() {
  const lockersArray = [
    {
      office: 'Mile 용산',
      lockers: [
        {
          number: '17F0A03',
          startDate: '2024.05.10',
          endDate: '2024.06.09',
          isUsing: true,
        },
        {
          number: '16F0A05',
          startDate: '2024.04.10',
          endDate: '2024.05.09',
          isUsing: false,
        },
      ],
    },
    {
      office: 'Mile 홍대',
      lockers: [
        {
          number: '12F0C19',
          startDate: '2024.04.16',
          endDate: '2024.05.16',
          isUsing: false,
        },
      ],
    },
  ];

  return (
    <main>
      <div className="flex flex-col gap-6 p-4">
        {lockersArray.map((item) => {
          return (
            <div
              key={item.office}
              className="flex flex-col gap-6"
            >
              <Title name={item.office} />
              <div className="flex flex-col gap-4">
                {item.lockers.map((item) => {
                  return (
                    <div
                      key={item.number}
                      className="flex items-center justify-between"
                    >
                      <div className="flex grow flex-col gap-2">
                        <span
                          className={clsx(
                            'label-large',
                            item.isUsing ? 'text-black' : 'text-black/40',
                          )}
                        >
                          {item.number}
                        </span>
                        <span
                          className={clsx(
                            'label-small',
                            item.isUsing ? 'text-black' : 'text-black/40',
                          )}
                        >
                          {item.startDate} - {item.endDate}
                        </span>
                      </div>
                      <div>
                        <Status
                          name="이용"
                          isUsing={item.isUsing}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
