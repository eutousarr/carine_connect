"use client";

import { useOptimistic } from "react";
import { removeContact } from "@/actions/contacts";
import Link from "next/link";
import Form from "next/form";

export type Contact = {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  phone: string| null;
  adresse: string| null;
  description: string | null;
};

export const ContactDetail = ({ contacts }: { contacts: Contact[] }) => {
  const [optimisticContacts, setOptimisticContacts] = useOptimistic(
    contacts,
    (currentContacts, contactId) => {
      return currentContacts.filter((contact) => contact.id !== contactId);
    }
  );

  const removeContactById = async (contactId: number) => {
    setOptimisticContacts(contactId);
    await removeContact(contactId);
  };

  return (
    <ul className="space-y-4 p-4">
      {optimisticContacts.map((contact) => (
        <li
          key={contact.id}
          className="p-4 bg-white shadow-md rounded-lg text-gray-700"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/contacts/${contact.id}`}>{contact.prenom} {contact.nom}</Link>
          </h2>
          <p>{contact.description}</p>
          <p className="text-lg font-medium">{contact.email}</p>
          <Form action={removeContactById.bind(null, contact.id)}>
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Delete
            </button>
          </Form>
        </li>
      ))}
    </ul>
  );
};
