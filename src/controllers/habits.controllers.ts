import {Request, Response} from "express";
import * as habitService from "../services/habits.services";


export const createHabitRecord = async (req: Request, res: Response) => {
    try{
        const{date, note, emotionId, selectedHabitsIds} = req.body
        // const userFireBaseUid = (req as any).user.firebase_uid
        const userFireBaseUid = "firebase_test_uid_123"


        const result = await habitService.createHabitRecord({
            date: new Date(date),
            note,
            emotionId,
            userFireBaseUid,
            selectedHabitsIds

        })
        res.status(201).json(result)
    }catch (error: any) {
    console.log("ERROR COMPLETO:", error)
    res.status(400).json({ error: error.message })
}
}