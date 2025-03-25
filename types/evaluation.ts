import { Matiere, Note } from "@prisma/client";

export interface Evaluation {
  id: number;
  name: string;
  slug: string;
  notes: Note[];
  matieres: Matiere[];
}
