import * as recordHabitRepo from '../repositories/habits.repositories'

interface CreateHabitRecordInput {
    date:Date,
    emotionId: string,
    note?: string,
    userFireBaseUid: string,
    selectedHabitsIds: string[]
}

export const createHabitRecord = async (data: CreateHabitRecordInput) => {
    const{date, note, emotionId,userFireBaseUid, selectedHabitsIds} = data

    //validar al usuario, pendiente
    const user = await recordHabitRepo.findUserByFirebaseUid(userFireBaseUid)

    if(!user) {
        throw new Error('Usuario no encontrado')
    }

    const habits = await recordHabitRepo.findHabitsByIds(selectedHabitsIds)
    
    //uno por categoria
    const categories = habits.map (h => h.id_category)
    const uniqueCategories = new Set(categories)

    if(uniqueCategories.size !== habits.length){
        throw new Error('Solo se puede seleccionar un habito por categoria')
    }

    const record = await recordHabitRepo.createRecordWithHabits({
        date,
        note,
        emotionId,
        userId: user.id,
        habitIds: selectedHabitsIds
    })

    return record

}