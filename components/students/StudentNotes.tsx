import type React from "react";
import { BellRing, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eleve } from "@/types/students";
import { moyenneFixed } from "@/lib/utils";

export default function StudentNotes({ eleve }: { eleve: Eleve }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bulletin de notes</CardTitle>
        <CardDescription>Année scolaire</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-sans leading-none">Push Notifications</p>
            <p className="text-sm text-muted-foreground">
              Send notifications to device.
            </p>
          </div>
        </div>
        <div>
          {eleve.notes.map((note, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-sansleading-none">{note.id}</p>
                <p className="text-sm text-muted-foreground">{note.annee}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> Imprimer
        </Button>
      </CardFooter>

      {eleve.notes.map((note) => (
        <div className="relative flex items-center gap-1" key={note.id}>
          {note.trimestre === "1er"} ? (
            <div className="absolute top-2 left-1">
              <span className="bg-amber-300">Premier trimestre</span>
              <Table className="w-100">
                <TableCaption>{note.trimestre}</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[20px] font-sans text-sm text-center">
                      Matière
                    </TableHead>
                    <TableHead className="min-w-[20px] font-sans text-sm text-center">
                      Note
                    </TableHead>
                    <TableHead className="min-w-[20px] font-sans text-sm text-center">
                      Appréciation
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Orthographe
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.ortho}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Production écrite
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.production}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Vocabulaire
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.vocabulaire}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Grammaire
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.grammaire}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Lecture
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.lecture}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Conjugaison
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.conjugaison}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Ecriture
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.ecriture}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Activités numériques
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.numeriques}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Activités de mesures
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.mesures}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Activités géométriques
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.geometrie}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Résolution de problème
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.probleme}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Histoire
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.histoire}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Géographie
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.geographie}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      I.S.T
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.ist}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Vivre Ensemble
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.vivreEnsemble}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Vivre dans son milieu
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.vivreMilieu}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Dessin
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.dessin}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Récitation
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1">
                      {note.recitation}
                    </TableCell>
                    <TableCell className="min-w-[20px]  font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell className="text-right">Total</TableCell>
                    <TableCell colSpan={2} className="text-center">{note.total} ponits / 180</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-right">Moyenne</TableCell>
                    <TableCell colSpan={2} className="text-center">{moyenneFixed(note?.moyenne ?? 0, 3)} / 10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-right">Rang</TableCell>
                    <TableCell colSpan={2} className="text-center">{note.rang} è / 59 élèves</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          ) : {note.trimestre === "second"} ? (
            <div className="absolute top-2 left-100">
              <span className="bg-amber-300">Second trimestre</span>
              <Table className="w-1/2">
                <TableCaption className="text-xl font-bold">{note.trimestre} trimestre</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[20px] font-sans text-sm text-center">
                      Matière
                    </TableHead>
                    <TableHead className="min-w-[20px] font-sans text-sm text-center">
                      Note
                    </TableHead>
                    <TableHead className="min-w-[20px] font-sans text-sm text-center">
                      Appréciation
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Orthographe
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.ortho}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Production écrite
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.production}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Vocabulaire
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.vocabulaire}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Grammaire
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.grammaire}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Lecture
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.lecture}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Conjugaison
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.conjugaison}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Ecriture
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.ecriture}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Activ numériques
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.numeriques}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Activités de mesures
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.mesures}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Activ géométriques
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.geometrie}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Résol. de problème
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.probleme}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Histoire
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.histoire}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Géographie
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.geographie}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      I.S.T
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.ist}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Vivre Ensemble
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.vivreEnsemble}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Vivre dans son milieu
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.vivreMilieu}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Dessin
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.dessin}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Récitation
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1">
                      {note.recitation}
                    </TableCell>
                    <TableCell className="min-w-[20px]  font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell className="text-right">Total</TableCell>
                    <TableCell colSpan={2} className="text-center">{note.total} ponits / 180</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-right">Moyenne</TableCell>
                    <TableCell colSpan={2} className="text-center">{moyenneFixed(note?.moyenne ?? 0, 3)} / 10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-right">Rang</TableCell>
                    <TableCell colSpan={2} className="text-center">{note.rang} è / 59 élèves</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          ) : {note.trimestre === "troisieme"} ? (
            <div className="absolute top-2 left-200">
              <span className="bg-amber-300">Troisième trimestre</span>
              <Table className="w-100">
                <TableCaption className="text-xl font-bold">{note.trimestre} trimestre</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="min-w-[20px] font-sans text-sm text-center">
                      Matière
                    </TableHead>
                    <TableHead className="min-w-[20px] font-sans text-sm text-center">
                      Note
                    </TableHead>
                    <TableHead className="min-w-[20px] font-sans text-sm text-center">
                      Appréciation
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Orthographe
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.ortho}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Production écrite
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.production}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Vocabulaire
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.vocabulaire}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Grammaire
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.grammaire}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Lecture
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.lecture}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Conjugaison
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.conjugaison}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Ecriture
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.ecriture}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Activ numériques
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.numeriques}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Activités de mesures
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.mesures}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Activ géométriques
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.geometrie}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Résol. de problème
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.probleme}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Histoire
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.histoire}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Géographie
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.geographie}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      I.S.T
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.ist}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Vivre Ensemble
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.vivreEnsemble}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Vivre dans son milieu
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.vivreMilieu}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Dessin
                    </TableCell>
                    <TableCell className="w-[10px] font-sans text-sm text-center py-1">
                      {note.dessin}
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="min-w-[20px] font-sans text-sm text-right py-1">
                      Récitation
                    </TableCell>
                    <TableCell className="min-w-[20px] font-sans text-sm text-center py-1">
                      {note.recitation}
                    </TableCell>
                    <TableCell className="min-w-[20px]  font-sans text-sm text-center py-1"></TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell className="text-right">Total</TableCell>
                    <TableCell colSpan={2} className="text-center">{note.total} ponits / 180</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-right">Moyenne</TableCell>
                    <TableCell colSpan={2} className="text-center">{moyenneFixed(note?.moyenne ?? 0, 3)} / 10</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-right">Rang</TableCell>
                    <TableCell colSpan={2} className="text-center">{note.rang} è / 59 élèves</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          )
        </div>
      ))}
    </Card>
  );
}
