"use client";
import { StringMap } from "@/app/types";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import SubmitButton from "@/app/components/SubmitButton";
import { formHandlerAction } from "@/app/students/_actions/formHandler";
import { getImageUrl } from "@/lib/image";

export default function StudentForm() {
  const [errors, setErrors] = useState<StringMap>({});
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (formData: FormData) => {
    const { errors, successMsg } = await formHandlerAction(formData);
    setErrors(errors || {});
    if (successMsg) {
      toast.success(successMsg);
      formRef.current?.reset();
    }
  };

  return (
    <form
      action={handleFormSubmit}
      ref={formRef}
      className="flex flex-col space-y-1 max-w-4xl mx-auto bg-amber-200 p-5 rounded-lg shadow-amber-800 mb-10 "
    >
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center justify-around bg-gray-800 text-white p-2 rounded-sm">
          <div>
            <label className="block " htmlFor="prenom">
              Prenom
            </label>
            <input
              type="text"
              name="prenom"
              id="prenom"
              
              title="Please enter a valid prenom"
              // defaultValue="Ibrahima"
              className="w-full p-2 rounded-md  text-gray-200 border"
            />
            <div className="h-8">
              {errors?.prenom && (
                <small className="text-red-400">{errors.prenom}</small>
              )}
            </div>
          </div>
          <div>
            <label className="block " htmlFor="nom">
              Nom
            </label>
            <input
              type="text"
              name="nom"
              id="nom"
              // defaultValue="Diop"
              className="w-full p-2 rounded-md text-gray-200 border"
              
              title="Please enter a valid nom"
            />
            <div className="h-8">
              {errors?.nom && (
                <small className="text-red-400">{errors.nom}</small>
              )}
            </div>
          </div>
          <div>
            <label className="block " htmlFor="matricule">
              Matricule
            </label>
            <input
              type="text"
              name="matricule"
              id="matricule"
              
              minLength={5}
              title="Please enter a valid matricule"
              // defaultValue="KISARR"
              className="w-full p-2 rounded-md text-gray-200 border"
            />
            <div className="h-8">
              {errors?.matricule && (
                <small className="text-red-400">{errors.matricule}</small>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 gap-3 bg-gray-800 text-white p-2 rounded-sm">
          <div className="w-1/4">
            <label className="block " htmlFor="datenais">
              Date naissance
            </label>
            <input
              type="text"
              name="datenais"
              id="datenais"
              // defaultValue={new Date().toISOString().split("T")[0]}
              
              className="w-full p-2 rounded-md text-gray-200 border"
            />
            <div className="h-8">
              {errors?.datenais && (
                <small className="text-red-400">{errors.datenais}</small>
              )}
            </div>
          </div>
          <div className="w-2/4">
            <label className="block " htmlFor="lieunais">
              Lieu naissance
            </label>
            <input
              type="text"
              name="lieunais"
              id="lieunais"
              
              minLength={1}
              title="Please enter a valid lieu naissance"
              // defaultValue="Dakar"
              className="w-full p-2 rounded-md text-gray-200 border"
            />
            <div className="h-8">
              {errors?.lieunais && (
                <small className="text-red-400">{errors.lieunais}</small>
              )}
            </div>
          </div>
          <div className="w-1/4">
            <label className="block " htmlFor="sexe">Sexe</label>
            <select name="sexe" id="sexe" className="w-full p-2 rounded-md text-gray-200 border">
              <option value="" className="text-black">Choix du sexe</option>
              <option value="M" className="text-black">M</option>
              <option value="F" className="text-black">F</option>
            </select>            
            <div className="h-8">
              {errors?.sexe && (
                <small className="text-red-400 text-[9px]">{errors.sexe}</small>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2 gap-3 bg-gray-800 text-white p-2 rounded-sm">
          <div>
            <label className="block " htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              
              title="Please enter a valid email"
              // defaultValue="sarrsindian@gmail.com"
              className="w-full p-2 rounded-md text-gray-200 border"
            />
            <div className="h-8">
              {errors?.email && (
                <small className="text-red-400">{errors.email}</small>
              )}
            </div>
          </div>

          <div>
            <label className="block " htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              title="Please enter a valid phone"
              className="w-full p-2 rounded-md text-gray-200 border"
            />
            <div className="h-8">
              {errors?.phone && (
                <small className="text-red-400">{errors.phone}</small>
              )}
            </div>
          </div>
          <div>
          <label className="block " htmlFor="photo">
            Photo
          </label>
          <input
              type="text"
              name="photo"
              id="photo"
              title="Please enter a valid phone"
              defaultValue={imageUrl || ""}
              className="w-full p-2 rounded-md text-gray-200 border"
            />
            <div className="h-8">
              {errors?.phone && (
                <small className="text-red-400">{errors.phone}</small>
              )}
            </div>
          <input
            type="file"
            name="file"
            id="file"
            title="Please enter a valid photo"
            onChange={async (e) => {
              const file = e.target.files![0];
              if (file) {
                const url = await getImageUrl(file);
                if (typeof url === "string") {
                  setImageUrl(url);
                } else {
                  console.error("Failed to get image URL:", url);
                }
              }
            }}
            className="w-full p-2 rounded-md text-gray-200 border"
          />
          <div className="h-8">
            {errors?.photo && (
              <small className="text-red-400">{errors.photo}</small>
            )}
          </div>
        </div>
        </div>
        
      </div>
      <SubmitButton />
    </form>
  );
}
