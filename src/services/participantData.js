import { database } from "../config/index.js"

async function getAllParticipants() {
    const [rows] = await database.query(`
        select * from participants
    `)
    return rows
}

async function getParticipant(participant_code) {
    const [result] = await database.query(`
        select * 
        from participants
        where participant_code = ?
    `, participant_code)
    return result
}

async function createParticipant(username, skill) {
    const [result] = await database.query(`
        insert into participants ( username, skill ) 
        values ( ?, ? )
    `, [username, skill])

    return result.insertId
}

async function deleteParticipant(participant_code) {
    const [result] = await database.query(`
        delete from participants 
        where participant_code = ?
    `, participant_code)
}

export { getAllParticipants, getParticipant, createParticipant, deleteParticipant }