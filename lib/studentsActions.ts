"use server";

import {prisma}  from "@/app/utils/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { studentSchema } from "./zod";

export const saveEleve = async (prevState: unknown, formData: FormData) => {
    const validatedFields = studentSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.eleve.create({
            data: {
                prenom: validatedFields.data.prenom,
                nom: validatedFields.data.nom,
                matricule: validatedFields.data.matricule,
                sexe: validatedFields.data.sexe,
                datenais: validatedFields.data.datenais,
                lieunais: validatedFields.data.lieunais,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone,
                adresse: validatedFields.data.adresse,
                photo: validatedFields.data.photo,

            }
        })
    } catch (error) {
        console.log(error)
        return { message: "Failed to create eleves" }
    }

    revalidatePath("/eleves");
    redirect("/eleves")
}

export const updateEleeleves = async (id: string, prevState: unknown, formData: FormData) => {
    const validatedFields = studentSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.eleve.update({
            data: {
                prenom: validatedFields.data.prenom,
                nom: validatedFields.data.nom,
                matricule: validatedFields.data.matricule,
                sexe: validatedFields.data.sexe,
                datenais: validatedFields.data.datenais,
                lieunais: validatedFields.data.lieunais,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone,
                adresse: validatedFields.data.adresse,
                photo: validatedFields.data.photo,
            },
            where: { id }
        })
    } catch (error) {
        console.log(error)
        return { message: "Failed to update eleves" }
    }

    revalidatePath("/eleves");
    redirect("/eleves")
}

export const deleteEleves = async (id: string) => {
    try {
        await prisma.eleve.delete({
            where: { id }
        })
    } catch (error) {
        console.log(error)
        return { message: "Failed to delete eleves" }
    }

    revalidatePath("/eleves");
}