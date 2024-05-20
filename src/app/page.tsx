import { auth } from '@/actions/auth';

const getEmployees = async () => {
  try {
    const res = await fetch('https://dummy.restapiexample.com/api/v1/employees');
    const employees = await res.json();

    return employees.data;
  } catch (error) {
    console.error(error);
  }
};

export default async function Home() {
  const session = await auth();
  const employees = await getEmployees();

  return (
    <main>
      {session && (
        <>
          <div className="bg-gray">session 정보: {JSON.stringify(session)}</div>
          <div className="bg-gray">accessToken: {session.accessToken}</div>
        </>
      )}

      {employees?.map((employee: any) => {
        return (
          <p
            style={{ color: 'gray' }}
            key={employee.id}
          >
            {employee.employee_name}
          </p>
        );
      })}
    </main>
  );
}
