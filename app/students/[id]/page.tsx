import { prisma } from "@/app/utils/db";
import EleveNotes from "@/app/students/_[matricule]/eleveNotes"; // Ensure EleveNotes is a valid React component
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Params {
  params: Promise<{
    id: string;
  }>;
}
export async function getEleveById(id: string) {
  const eleve = await prisma.eleve.findFirst({
    where: {
      id: id,
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
  const { id } = await params;
  const data = await getEleveById(id);
  return (
    <div>
      {data ? (
        <EleveNotes eleve={data} />
      ) : (
        <div>Student not found</div>
      )}
    </div>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const eleve = await getEleveById(params.id as string);

  if (!eleve) {
    return notFound();
  }

  const title = `Notes de ${(await eleve).prenom}_${(await eleve).nom}`;

  return {
    title,
  };
}
