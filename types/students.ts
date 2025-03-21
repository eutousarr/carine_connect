export interface Eleve {
  id: string;
  matricule: string;
  nom: string;
  prenom: string;
  sexe: string;
  datenais: string | undefined;
  lieunais: string | undefined;
  adresse: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  photo: string | undefined;
  updatedAt: Date;
}
