import { useParams } from '@remix-run/react';

export default function FacultyLayout() {
  const { faculty } = useParams();

  return <div>{faculty}</div>;
}
