// import type React from "react";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Table,
//   TableBody,
//   // TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Eleve } from "@/types/students";
// import { appreciationNote, moyenneFixed } from "@/lib/utils";
// import { prisma } from "@/app/utils/db";
// import { PrintPage } from "@/app/components/web/Print";
// import Bulletin from "@/components/bulletin";

// export async function getTrimestreById(id: string) {
//   const trimestre = await prisma.trimestre.findUnique({
//     where: {
//       id: id,
//     },
//   });
//   if (!trimestre) return;
//   return trimestre;
// }
// export async function getNotesByTrimestre(id: string) {
//   const notes = await prisma.note.findMany({
//     where: {
//       trimestreId: id,
//     },
//   });
//   return notes;
// }

// export default async function EleveNotes({ eleve }: { eleve: Eleve }) {

//   // const trimestres = await prisma.trimestre.findMany();

//   return (
//     <Bulletin eleve={eleve} />
    
//     // <Card>
//     //   <CardHeader>
//     //     <div className="grid grid-cols-3">
//     //       <div>
//     //         <p>Académie de Ziguinchor</p>
//     //         <p>IEF de Bignona 2</p>
//     //         <p className="text-2xl">Ecole Saint Thomas d&apos;Aquin</p>
//     //         <CardDescription>Contact: 77 554 41 91</CardDescription>
//     //       </div>
//     //       <div className="text-center mt-8">
//     //         <CardTitle>BULLETIN DES NOTES</CardTitle>
//     //         <p className="text-2xl mt-2">Classe : CE2</p>
//     //         <p className="text-xl mt-1">Année scolaire : 2024/2025</p>
//     //       </div>
//     //       <div>
//     //         <div className="bg-amber-200 p-2 rounded-2xl">
//     //           <div className="flex items-center justify-between max-w-full">
//     //             <div>Prénom et Nom</div>
//     //             <span className="text-sm font-semibold">
//     //               {eleve.nom} {eleve.prenom}
//     //             </span>
//     //           </div>
//     //           <div className="flex items-center justify-between min-w-60 max-w-80">
//     //             <span>Date de naissance</span>
//     //             <span>{eleve.datenais}</span>
//     //           </div>
//     //           <div className="flex items-center justify-between min-w-60 max-w-80">
//     //             <span>Lieu de maissance</span>
//     //             <span>{eleve.lieunais}</span>
//     //           </div>
//     //           <div className="flex items-center justify-between min-w-60 max-w-80">
//     //             <span>Sexe</span>
//     //             <span>{eleve.sexe === "M" ? "Masculin" : "Féminin"}</span>
//     //           </div>
//     //           <div className="flex items-center justify-between min-w-60 max-w-80">
//     //             <span>IEN ou Matricule</span>
//     //             <span>{eleve.matricule}</span>
//     //           </div>
//     //           <div className="flex items-center justify-between min-w-60 max-w-80">
//     //             <span>ID</span>
//     //             <span>{eleve.id}</span>
//     //           </div>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </CardHeader>
//     //   <CardContent className="w-full">
//     //     <div className="flex items-start">
//     //       <div className="w-1/4 border-l-1">
//     //         <div className="bg-amber-300 w-full px-3 py-1 text-xl text-center">
//     //           Diciplines - Matières
//     //         </div>
//     //         <Table>
//     //           <TableHeader>
//     //             <TableRow>
                  
//     //               <TableHead  colSpan={2} className="min-w-[20px] font-sans text-sm text-center">
//     //                 Matière
//     //               </TableHead>
//     //             </TableRow>
//     //           </TableHeader>
//     //           <TableBody>
//     //             <TableRow>
                 
//     //               <TableCell colSpan={2} className="min-w-[60px] font-sans text-sm text-right py-1">
//     //                 Orthographe
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Production écrite
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Vocabulaire
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Grammaire
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Lecture
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Conjugaison
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Ecriture
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
                  
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Activ numériques
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Activ de mesures
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Activ géomét
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Résolution de prob
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
                 
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Histoire
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Géographie
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
                
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 IST
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
                  
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Vivre Milieu
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Vivre Ensemble
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
                  
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Dessin
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell colSpan={2} className="min-w-[20px] font-sans text-sm text-right py-1">
//     //                 Récitation
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell className="min-w-[20px] font-sans text-sm text-right py-1"></TableCell>
//     //               <TableCell className="min-w-[20px] font-sans text-lg font-bold text-right py-3">
//     //                 Total
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell className="min-w-[20px] font-sans text-sm text-right py-1"></TableCell>
//     //               <TableCell className="min-w-[20px] font-sans text-lg font-bold text-right py-3">
//     //                 Moyenne
//     //               </TableCell>
//     //             </TableRow>
//     //             <TableRow>
//     //               <TableCell className="min-w-[20px] font-sans text-sm text-right py-1"></TableCell>
//     //               <TableCell className="min-w-[20px] font-sans text-lg font-bold text-right py-3">
//     //                 Rang
//     //               </TableCell>
//     //             </TableRow>
//     //           </TableBody>
//     //         </Table>
//     //       </div>
//     //       <div className="w-3/4 grid grid-cols-3">
//     //         {trimestres.map((trim, index) => (
//     //           <div key={index} className="mb-4">
//     //             {eleve.notes
//     //               .filter((note) => note.trimestreId === trim.id)
//     //               .map((note) => (
//     //                 <div
//     //                   className="flex items-center gap-1 border-l-1"
//     //                   key={note.id}
//     //                 >
//     //                   <div className="">
//     //                     <div className="bg-amber-300 w-full px-3 py-1 text-xl text-center">
//     //                       {trim.libelle}
//     //                     </div>
//     //                     <Table className="w-80">
//     //                       <TableHeader>
//     //                         <TableRow>
//     //                           <TableHead className="min-w-[20px] font-sans text-sm text-center">
//     //                             Note
//     //                           </TableHead>
//     //                           <TableHead className="min-w-[20px] font-sans text-sm text-left">
//     //                             Appréciation
//     //                           </TableHead>
//     //                         </TableRow>
//     //                       </TableHeader>
//     //                       <TableBody>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.ortho}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">
//     //                             {appreciationNote(note.ortho ?? 0)}
//     //                           </TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.production}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">
//     //                           {appreciationNote(note.production ?? 0)}
//     //                           </TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.vocabulaire}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">
//     //                           {appreciationNote(note.vocabulaire ?? 0)}
//     //                           </TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.grammaire}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">
//     //                           {appreciationNote(note.grammaire ?? 0)}
//     //                           </TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.lecture}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.lecture ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.conjugaison}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.conjugaison ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.ecriture}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.ecriture ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.numeriques}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.numeriques ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.mesures}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.mesures ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.geometrie}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.geometrie ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.probleme}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.probleme ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.histoire}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.histoire ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.geographie}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.geographie ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.ist}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.ist ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.vivreEnsemble}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.vivreEnsemble ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.vivreMilieu}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.vivreMilieu ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="w-[10px] font-sans text-sm text-center py-1">
//     //                             {note.dessin}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-left py-1">{appreciationNote(note.dessin ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell className="min-w-[20px] font-sans text-sm text-center py-1">
//     //                             {note.recitation}
//     //                           </TableCell>
//     //                           <TableCell className="min-w-[20px]  font-sans text-sm text-left py-1">{appreciationNote(note.recitation ?? 0)}</TableCell>
//     //                         </TableRow>
//     //                       </TableBody>
//     //                       <TableFooter>
//     //                         <TableRow>
//     //                           <TableCell colSpan={2} className="text-left">
//     //                             {note.total} points / 180
//     //                           </TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell colSpan={2} className="text-left">
//     //                             {moyenneFixed(note?.moyenne ?? 0, 3)} / 10
//     //                           </TableCell>
//     //                         </TableRow>
//     //                         <TableRow>
//     //                           <TableCell colSpan={2} className="text-left">
//     //                             {note.rang} è / 59 élèves
//     //                           </TableCell>
//     //                         </TableRow>
//     //                       </TableFooter>
//     //                     </Table>
//     //                   </div>
//     //                 </div>
//     //               ))}
//     //           </div>
//     //         ))}
//     //       </div>
//     //     </div>
//     //   </CardContent>
//     //   <CardFooter>
//     //     <PrintPage />
//     //   </CardFooter>
//     // </Card>
//   );
// }
