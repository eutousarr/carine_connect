import { z } from 'zod';

export const studentSchema = z.object({
  prenom: z.string({ message: 'Prenom is required' }).min(1, 'Prénom must be at least 1 character'),
  nom: z.string({ message: 'Nom is required' }).min(1, 'Nom must be at least 1 character'),
  matricule: z.string({ message: 'Matricule is required' }).min(5, 'Matricule must be at least 5 characters'),
  sexe: z.enum(['M', 'F']).default('M'),
  datenais: z.string().optional(),
  lieunais: z.string().optional(),
  adresse: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  photo: z.string().optional(),
  updatedAt: z.date().default(() => new Date())

});

export type Student = z.infer<typeof studentSchema>;