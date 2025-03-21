import { prisma } from "@/app/utils/db";

const ITEMS_PER_PAGE = 5;

export const getEleves = async (query: string, currentPage: number) => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    try {
        const eleves = await prisma.eleve.findMany({
            skip: offset,
            take: ITEMS_PER_PAGE,
            where: {
                OR: [
                    {
                        prenom: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        nom: {
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                ]
            }
        });
        return eleves;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch eleve data")
    }
}

export const getEleveById = async (id: string) => {
    try {
        const eleve = await prisma.eleve.findUnique({
            where: { id }
        });
        return eleve;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch eleve data");
    }
}

export const getElevePages = async (query: string) => {
    try {
        const eleves = await prisma.eleve.count({
            where: {
                OR: [
                    {
                        prenom: {
                            contains: query,
                            mode: "insensitive"
                        }
                    },
                    {
                        nom: {
                            contains: query,
                            mode: "insensitive"
                        }
                    }
                ]
            }
        });
        const totalPages = Math.ceil(Number(eleves) / ITEMS_PER_PAGE);
        return totalPages;
    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch eleve data");
    }
}

