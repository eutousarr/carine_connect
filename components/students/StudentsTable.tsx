import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from '@/components/ui/table';
import Link from 'next/link';
// import students from '@/data/students';
import { prisma } from '@/app/utils/db';
import {moyenneFixed} from '@/lib/utils';
interface StudentsTableProps {
  limit?: number;
  title?: string;
}

async function getStudents(){
  const students = await prisma.eleve.findMany({
    include: {
      notes:true
    }
  });
  return students
}

const StudentsTable = async ({ limit, title }: StudentsTableProps) => {
  // Sort students in dec order based on date
  const students = await getStudents();
  console.log(students[0].notes)
  const sortedStudents = [...students].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  // Filter posts to limit
  const filteredStudents = limit ? sortedStudents.slice(0, limit) : sortedStudents;

  return (
    <div className='mt-10'>
      <h3 className='text-2xl mb-4 font-semibold'>{title ? title : 'Students'}</h3>
      <Table>
        <TableCaption>A list students</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>IEN</TableHead>
            <TableHead>Prenom</TableHead>
            <TableHead>Nom</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Lieu</TableHead>
            <TableHead>Sexe</TableHead>
            <TableHead>Moyenne</TableHead>
            <TableHead>Rang</TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStudents.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.matricule}</TableCell>
              <TableCell>{student.nom}</TableCell>
              <TableCell>{student.prenom}</TableCell>
              <TableCell>{student.datenais}</TableCell>
              <TableCell>{student.lieunais}</TableCell>
              <TableCell>{student.sexe === 'M' ? 'Garçon': "Fille"}</TableCell>
              <TableCell>
                {student.notes[0]["moyenne"] !== null
                  ? moyenneFixed(student.notes[0]["moyenne"], 2)
                  : "N/A"}
              </TableCell>
                  <TableCell>{student.notes[0]["rang"]} è</TableCell>
              <TableCell>
                <Link href={`/students/${student.id}`}>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs'>
                    Bulletin
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentsTable;
