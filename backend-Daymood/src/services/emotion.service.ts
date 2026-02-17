import * as emotionRepository from '../repositories/emotion.repository'

export const emotionList = async (idUser: string) => {
    return emotionRepository.findByUser(idUser)
}

export const createEmotion = async (data: any, idUser: string) => {
    if (!data.name || !data.category) {
        throw Error(`el nombre o categoría es obligatorio`)
    }
    return emotionRepository.create({
        ...data,
        id: idUser,
        name: data.name,
        category: data.category
    })
}