export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  authorName: string;
  authorImage: string;
  authorId: string;
  imageUrl: string;
  updatedAt: Date
}

export interface Student {
  id: string;
  prenom: string;
  nom: string;
  matricule: string;
  sexe: string;
  createdAt: Date
  updatedAt: Date
}

