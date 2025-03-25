import { prisma } from '@/app/utils/db';

export default async function getBulletion(){
    // const trimestres = await prisma.trimestre.findMany()

    const notePs = await prisma.note.findMany({
        where: {
            evaluationId: 1,
            evaluation: { id: 1 }
        },
        include: {
            evaluation: true,
            eleves: true

        }
    })

    const evaluations = prisma.evaluation.findMany({
        where: {
            id: 1
        },
        include: {
            notes: true,
        }
    })

    const data = {notePs, evaluations}
    
    return data
}

