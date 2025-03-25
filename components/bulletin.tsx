"use client";

import html2canvas from "html2canvas-pro";
import jsPDF from "jspdf";
import React from "react";
// import notePs from "@/data/bulletins"
import { appreciationNote, moyenneFixed } from "@/lib/utils";
import matieres from "@/data/matieres";
import { Eleve } from "@/types/students"; // Adjust the path to where Eleve is defined

export default function Bulletin({ eleve }: { eleve: Eleve }) {
  const printRef = React.useRef(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) {
      return;
    }

    const canvas = await html2canvas(element, {
      scale: 2,
    });
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: "a4",
    });

    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();

    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("examplepdf.pdf");
  };

  const mesNotes = eleve.notes;
  const resultatEleve = eleve.resultats.filter((resultat) => resultat.eleveId === eleve.id && resultat.evaluationId === 1 );

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <div ref={printRef} className="p-4 bg-white border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-sm font-semibold">
                Ecole Saint Thomas d&apos;Aquin
              </h2>
              <p className="text-sm text-gray-600">
                Académie de Ziguinchor
                <br />
                IEF de Bignona 2
              </p>
            </div>
            <div className="text-right">
              <h2 className="text-sm font-semibold">
                {" "}
                {eleve.nom} {eleve.prenom}{" "}
              </h2>
              <p className="text-sm text-gray-600">
              {eleve.datenais} à {eleve.lieunais}
                <br />
                Matricule : {eleve.matricule}
              </p>
              <p className="text-md text-gray-600 font-medium">
                Premier trimestre 2024-2025
              </p>
            </div>
          </div>

          <div className="mb-1">
            <h3 className="text-center text-md font-semibold">
              Bulletin de notes - classe: CE2{" "}
            </h3>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-300">
                <th className="w-3/6 border p-1 text-left">Disciplines</th>
                <th className="w-1/6 border p-1 text-center">Note</th>
                <th className="w-2/6 border p-1 text-left">Appréciation</th>
              </tr>
            </thead>
            <tbody>
              {mesNotes.map((note) => {
                const matiere = matieres.find((item) => item.id === note.matiereId);
                return (
                  <tr key={`${note.matiereId}`}>
                    <td className="w-3/6 border p-1"> {matiere?.label ?? "N/A"} </td>
                    <td className="w-1/6 border p-1 text-center">
                      {note.score}
                    </td>
                    <td className="w-2/6 border p-1 text-left">
                      {appreciationNote(
                        Number(note.score ?? 0)
                      )}
                    </td>
                  </tr>
                );
              })}
              <tr className="bg-gray-300">
                <th className="w-3/6 border p-2 text-right">Total</th>
                <th className="w-1/6 border p-1 text-center">
                  {" "}
                  {moyenneFixed(resultatEleve[0].total ?? 0, 2)} / 180{" "}
                </th>
                <th className="w-2/6 border p-1 text-left"></th>
              </tr>
              <tr className="bg-gray-300">
                <th className="w-3/6 border p-2 text-right">Moyenne</th>
                <th className="w-1/6 border p-1 text-center">
                  {" "}
                  {moyenneFixed(resultatEleve[0].moyenne ?? 0, 2)} / 10{" "}
                </th>
                <th className="w-2/6 border p-1 text-left"></th>
              </tr>
              <tr className="bg-gray-300">
                <th className="w-3/6 border p-2 text-right">Rang</th>
                <th className="w-1/6 border p-1 text-center">
                  {" "}
                  {resultatEleve[0].rang}è / 59 él{" "}
                </th>
                <th className="w-2/6 border p-1 text-left"></th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={handleDownloadPdf}
            className="flex items-center bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}
