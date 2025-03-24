import Header from '../components/Header';
// import StudentForm from '@/app/students/_components/StudentForm';
// import { prisma } from '../utils/db';
import StudentsTable from '@/components/students/StudentsTable';


export default function StudentRoute() {
  const p = 60;
  return (
    <>
      <Header heading={'Add Student'} description={'Add a new student'} />
      <StudentsTable title='LES ELEVES' limit={p} />
    </>
  );
}