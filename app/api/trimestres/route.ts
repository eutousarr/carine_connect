import { prisma } from '@/app/utils/db'
import { NextResponse } from 'next/server'

export async function GET() {
  const trimestres = await prisma.trimestre.findMany()
  console.log(trimestres)
  return NextResponse.json(trimestres)
}


export async function POST(request: Request) {
  try {
    const data = await request.json()
    const trimestre = await prisma.trimestre.create({ 
      data: {
        ...data,
      }
    })
    return NextResponse.json(trimestre)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Erreur lors de la création du trimestre' }, { status: 500 })
  }
} 