import { z } from "zod"


export const studentSchema = z.object({
    prenom: z.string().min(1, "prenom required"),
    nom: z.string().min(1, "Nom required"),
    matricule: z.string().min(1, "Le matricule est obligatoire pour élève."),
    sexe: z.enum(["M", "F"]).default("M"),
    datenais: z.date().optional(),
    lieunais: z.string().optional(),
    adresse: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    photo: z.string().optional(),
    updatedAt: z.date().default(() => new Date())

})

export type StudentSchema = z.infer<typeof studentSchema>;
