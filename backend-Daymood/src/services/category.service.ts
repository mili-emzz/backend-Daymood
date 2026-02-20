import * as categoryRepository from '../repositories/categories.repository'

export const getAllCategories = async () => {
    return categoryRepository.findAll()
}

export const getOneCategory = async (id: string) => {
    return categoryRepository.findById(Number(id))
}