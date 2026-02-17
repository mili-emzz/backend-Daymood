import {prisma} from '../prisma/client';

export const findUserByFirebaseUid = async (firebaseUid: string) => {
    return prisma.users.findUnique({
        where: {firebase_uid: firebaseUid}
    })
}



export const findHabitsByIds = async (habitsIds: string[]) => {
    return prisma.habits.findMany({
        where: {
            id: {in: habitsIds}
        },
        select:{
            id:true, id_category:true
        }
    })
}

interface CreateRecordWithHabitsInput {
    date:Date,
    note?: string,
    emotionId: string,
    userId: string,
    habitIds: string[]
}


export const createRecordWithHabits = async (data: CreateRecordWithHabitsInput) => {
    const {date, note, emotionId, userId, habitIds} = data

    return prisma.records.create({
        data:{
            date,
            note,
            id_user: userId,
            id_emotion: emotionId,
            record_habits: {
                create:habitIds.map(habitId =>({
                    id_habit: habitId
                }))
            }
        },
        include:{
            record_habits: true
        }
    })
}