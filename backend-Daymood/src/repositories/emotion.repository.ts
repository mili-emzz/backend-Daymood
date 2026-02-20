import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const create = (data: PrismaClient) => {
    return prisma.emotions.create({data})
}

export const findById = (id: string) => {
    return prisma.emotions.findUnique({where: { id } })
}

export const findByUser = (idUser: string) => {
    return prisma.emotions.findMany({
        where: { id: idUser } })
}
