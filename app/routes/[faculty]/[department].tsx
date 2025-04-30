import { Link, useParams } from '@remix-run/react';

export default function DepartmentLayout() {
  const { faculty, department } = useParams();

  <div>
    <h1>Faculty: {faculty}</h1>
    <h2>Department: {department}</h2>
    <p>
      Welcome to the {department} department of {faculty}!
    </p>
    <Link to={`/${faculty}`}>Back to Faculty Page</Link>
  </div>;
}
