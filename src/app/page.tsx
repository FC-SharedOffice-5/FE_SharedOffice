const getEmployees = async () => {
  const res = await fetch('https://dummy.restapiexample.com/api/v1/employees');
  const employees = await res.json();

  return employees.data;
};

export default async function Home() {
  const employees = await getEmployees();

  return (
    <main>
      {employees.map((employee: any) => {
        return (
          <p
            style={{ color: 'white' }}
            key={employee.id}
          >
            {employee.employee_name}
          </p>
        );
      })}
    </main>
  );
}
