import { getContacts } from "@/data/prisma";
import { ContactDetail } from "./contact-detail";

export type Contact = {
  id: number;
  prenom: string;
  nom: string;
  email: string;
  phone: string| null;
  adresse: string| null;
  description: string | null;
};

export default async function ContactsPrismaDBPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  const contacts: Contact[] = await getContacts(query);

  return <ContactDetail contacts={contacts} />;
}
