"use server";
import { z } from "zod"
import {prisma}  from "@/app/utils/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ContactSchema = z.object({
    prenom: z.string().min(1, "prenom required"),
    nom: z.string().min(1, "Nom required"),
    email: z.string().email().min(1, "Email obligatoire"),
    phone: z.string().optional(),
    adresse: z.string().optional(),
    description: z.string().optional(),


})

export const saveContact = async (prevState: unknown, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.contact.create({
            data: {
                prenom: validatedFields.data.prenom,
                nom: validatedFields.data.nom,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone,
                adresse: validatedFields.data.adresse,
                description: validatedFields.data.description,
                updatedAt: new Date().toISOString(),
            }
        })
    } catch (error) {
        console.log(error)
        return { message: "Failed to create contact" }
    }

    revalidatePath("/contacts");
    redirect("/contacts")
}

export const updateContact = async (id: number, prevState: unknown, formData: FormData) => {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
        return {
            Error: validatedFields.error.flatten().fieldErrors
        }
    }

    try {
        await prisma.contact.update({
            data: {
                prenom: validatedFields.data.prenom,
                nom: validatedFields.data.nom,
                email: validatedFields.data.email,
                phone: validatedFields.data.phone,
                adresse: validatedFields.data.adresse,
                description: validatedFields.data.description,
            },
            where: { id }
        })
    } catch (error) {
        console.log(error)
        return { message: "Failed to update contact" }
    }

    revalidatePath("/contacts");
    redirect("/contacts")
}

export const deleteContact = async (id: number) => {
    try {
        await prisma.contact.delete({
            where: { id }
        })
    } catch (error) {
        console.log(error)
        return { message: "Failed to delete contact" }
    }

    revalidatePath("/contacts");
}