import { prisma } from "../../prisma/client";

export const findAll =  () => {
    return prisma.categories.findMany();
}

export const findById  =  (id: number) => {
    return prisma.categories.findUnique( {where: {id} } )
}