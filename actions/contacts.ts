"use server";

import { addContact, updateContact, deleteContact } from "@/data/prisma";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export type Errors = {
  prenom?: string,
  nom?: string,
  email?: string,
  phone?: string,
  adresse?: string,
  description?: string,
};

export type FormState = {
  errors: Errors;
};

export async function createContact(prevState: FormState, formData: FormData) {
  const prenom = formData.get("prenom") as string;
  const nom = formData.get("nom") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const adresse = formData.get("adresse") as string;
  const description = formData.get("description") as string;

  const errors: Errors = {};

  if (!prenom) {
    errors.prenom = "Prenom is required";
  }

  if (!nom) {
    errors.nom = "Nom is required";
  }

  if (!email) {
    errors.email = "Email is required";
  }

  if (!phone) {
    errors.phone = "Phone is required";
  }

  if (!adresse) {
    errors.adresse = "Adresse is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await addContact(prenom, nom, email, phone, adresse, description);
  redirect("/contacts");
}

export async function editContact(
  id: number,
  prevState: FormState,
  formData: FormData
) {
  const prenom = formData.get("prenom") as string;
  const nom = formData.get("nom") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const adresse = formData.get("adresse") as string;
  const description = formData.get("description") as string;


  const errors: Errors = {};

  
  if (!prenom) {
    errors.prenom = "Prenom is required";
  }

  if (!nom) {
    errors.nom = "Nom is required";
  }

  if (!email) {
    errors.email = "Email is required";
  }

  if (!phone) {
    errors.phone = "Phone is required";
  }

  if (!adresse) {
    errors.adresse = "Adresse is required";
  }

  if (!description) {
    errors.description = "Description is required";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await updateContact(id, prenom, nom, email, phone, adresse, description);
  redirect("/contacts");
}

export async function removeContact(id: number) {
  await deleteContact(id);
  revalidatePath("/contacts");
}
