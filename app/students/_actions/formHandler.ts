"use server";

import { sleep } from "@/lib/utils";
import { studentSchema } from "@/app/students/_schemas/studentSchema";
import { StudentFormState } from "../../types";
import { convertZodErrors } from "@/app/utils/forms";
import { prisma } from "@/app/utils/db";

export async function formHandlerAction (
  formData: FormData
): Promise<StudentFormState> {
  //uncomment to easily view loading state in submit button
  await sleep(5000);

  const unvalidatedData = {
    id: crypto.randomUUID(),
    prenom: formData.get("prenom") as string,
    nom: formData.get("nom") as string,
    matricule: formData.get("matricule") as string,
    sexe: formData.get("sexe") as string,
    datenais: formData.get("datenais"),
    lieunais: formData.get("lieunais"),
    email: formData.get("email"),
    adresse: formData.get("adresse"),
    phone: formData.get("phone"),
    photo: formData.get("photo"),
  };

  const validated = studentSchema.safeParse(unvalidatedData);

  if (!validated.success) {
    const errors = convertZodErrors(validated.error);
    return {
      errors,
    };
  } else {
    console.log(validated.data);
    try {
      const student = await prisma.student.create({
        data: {
          id: crypto.randomUUID(),
          prenom: validated.data.prenom as string,
          nom: validated.data.nom as string,
          matricule: validated.data.matricule as string,
          sexe: validated.data.sexe as string,
          datenais: validated.data.datenais,
          lieunais: validated.data.lieunais,
          email: validated.data.email,
          adresse: validated.data.adresse,
          phone: validated.data.phone,
          photo: validated.data.photo,
          updatedAt: new Date() as Date,
        },
      });
      return { successMsg: "Student added successfully!", data: student };
    } catch (error) {
      console.log(error);
      throw new Error("Failed to fetch student data");
    }
  }
};
