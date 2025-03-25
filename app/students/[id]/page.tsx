import { prisma } from "@/app/utils/db";
// import EleveNotes from "@/app/students/_[matricule]/eleveNotes"; // Ensure EleveNotes is a valid React component
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Bulletin from "@/components/bulletin";
import { Eleve } from "@/types/students"; // Adjust the path to where Eleve is defined

interface Params {
  params: Promise<{
    id: number;
  }>;
  eleve: Eleve
}
export async function getEleveById(id: number) {
  
  const eleve = await prisma.eleve.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      notes: {
        where:{
          evaluationId: 1,
        }
      },
      resultats:true,
      inscriptions: true,
    }
  });

  if (!eleve) {
    throw new Error("Student not found");
  }

  const transformedEleve = {
    ...eleve,
    notes: eleve.notes.map(note => ({
      ...note,
      eleveId: note.eleveId,
    })),
    resultats: eleve.resultats || [], // Ensure resultats is an array
  };

  console.log("student", transformedEleve);
  return transformedEleve as unknown as Eleve; // Convert to unknown first, then to Eleve
}
export default async function NotesRoute({ params }: Params) {
  const { id } = await params;
  const data = await getEleveById(id);
  return (
    <div>
      {data ? (
        <Bulletin eleve={data} />
      ) : (
        <div>Student not found</div>
      )}
    </div>
  );
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const eleve = await getEleveById(params.id as number);

  if (!eleve) {
    return notFound();
  }

  const title = `Notes de ${eleve.prenom}_${eleve.nom}`;

  return {
    title,
  };
}
