import { database } from "../config/index.js"

async function getAllTournaments() {
    const [rows] = await database.query(`
        select * from tournaments
    `)
    return rows
}

async function getTournament(tournament_code) {
    const [result] = await database.query(`
        select * 
        from tournaments
        where tournament_code = ?
    `, tournament_code)
    return result
}

async function createTournament(name, format, description, status) {
    const [result] = await database.query(`
        insert into tournaments ( name, format, description, status ) 
        values (?, ?, ?, ?)
    `, [name, format, description, status])

    return result.insertId
}

async function deleteTournament(tournament_code) {
    const [result] = await database.query(`
        delete from tournaments 
        where tournament_code = ?
    `, tournament_code)
}

export { getAllTournaments, getTournament, createTournament, deleteTournament }