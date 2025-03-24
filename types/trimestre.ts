export interface Trimestre {
    id: string;
    libelle: string;
    notes: Array<{
        id: string;
        eleveId: string;
        annee: string;
        trimestreId: string;
        ortho: number | null;
        production: number | null;
        vocabulaire: number | null;
        grammaire: number | null;
        lecture: number | null;
        conjugaison: number | null;
        ecriture: number | null;
        numeriques: number | null;
        mesures: number | null;
        geometrie: number | null;
        probleme: number | null;
        histoire: number | null;
        geographie: number | null;
        ist: number | null;
        vivreEnsemble: number | null;
        vivreMilieu: number | null;
        dessin: number | null;
        recitation: number | null;
        total: number | null;
        moyenne: number | null;
        rang: number | null;
      }>;
}