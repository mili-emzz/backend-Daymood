import * as emotionService from '../services/emotion.service'

export const getAll = async (req:any, res:any, next:any) =>{
    try{
        const emotions = await emotionService.emotionList(req.user.id)
        res.json(emotions)
    } catch (error) {
        next(error)
    }
}

export const create = async (req:any, res:any, next:any) =>{
    try{
        const emotion = await emotionService.createEmotion(req.body, req.user.id)
        res.status(201).send(emotion)
    } catch (error) {
        next(error)
    }
}