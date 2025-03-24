import { prisma } from "@/app/utils/db";
import StudentNotes from "@/components/students/StudentNotes"; // Ensure EleveNotes is a valid React component
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Params {
  params: Promise<{
    matricule: string;
  }>;
}
export async function getEleveByMatricule(matricule: string) {
  const eleve = await prisma.eleve.findFirst({
    where: {
      matricule: matricule,
    },
    include: {
      notes: {
        orderBy:{
          id: 'asc'
        }
      }
    }
  });

  if (!eleve) {
    throw new Error("Student not found");
  }
  return eleve;
}
export default async function NotesRoute({ params }: Params) {
  const { matricule } = await params;
  const data = await getEleveByMatricule(matricule);
  return (
    <div>
      {data ? (
        <StudentNotes eleve={data} />
      ) : (
        <div>Student not found</div>
      )}
    </div>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const eleve = getEleveByMatricule(params.matricule);

  if (!eleve) {
    return notFound();
  }

  const title = `Notes de ${(await eleve).prenom}_${(await eleve).nom}`;

  return {
    title,
  };
}
