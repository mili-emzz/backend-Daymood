import * as categoriesService from '../services/category.service'

export const getAll = async (req:any, res:any, next:any) => {
    try{
        const categories = await categoriesService.getAllCategories()
        res.json(categories)
    }catch (error) {
        next(error)
    }
}

export const getCategoryById = async (req:any, res:any, next:any) => {
    try{
        const { id } = req.params;
        const category = await categoriesService.getOneCategory(id)
        res.json(category)
    }catch (error) {
        next(error)
    }
}