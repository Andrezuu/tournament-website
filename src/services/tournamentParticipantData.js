import { database } from "../config/index.js"

async function getTournamentParticipants(tournament_code) {
    const [rows] = await database.query(`
        select tp.participant_code, p.username
        from tournament_participant tp
        join participants p on tp.participant_code = p.participant_code
        where tp.tournament_code = ?
    `, tournament_code)
    return rows
}

async function getParticipantTournaments(participant_code) {
    const [result] = await database.query(`
        select * 
        from tournament_participant
        where participant_code = ?
    `, participant_code)
    return result
}

async function createTournamentParticipant(tournament_code, participant_code) {

    const [result] = await database.query(`
        insert into tournament_participant ( tournament_code, participant_code ) 
        values ( ?, ? )
    `, [tournament_code, participant_code])

    return result.insertId
}

async function deleteTournamentParticipant(tournament_code, participant_code) {

    const [result] = await database.query(`
        delete from tournament_participant
        where tournament_code = ? 
        and participant_code = ?
    `, [tournament_code, participant_code])
}

export { getTournamentParticipants, getParticipantTournaments, createTournamentParticipant, deleteTournamentParticipant }