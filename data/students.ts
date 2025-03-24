import { prisma } from '@/app/utils/db';
// import { Eleve } from '@/types/students';

const eleves = await prisma.eleve.findMany({
    include: {
      notes: true,
      inscriptions: true,
      resultats: true
    }
})
export default eleves


// ).map(eleve => ({
//   ...eleve,
//   datenais: eleve.datenais ?? undefined,
//   lieunais: eleve.lieunais ?? undefined,
//   adresse: eleve.adresse ?? undefined,
//   email: eleve.email ?? undefined,
//   phone: eleve.phone ?? undefined,
//   photo: eleve.photo ?? undefined
// }));
