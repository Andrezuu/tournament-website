import * as database from "../services/index.js";
import { FreeForAllTournamentStrategy, GroupTournamentStrategy, SwissTournamentStrategy, TournamentContext, TournamentStrategy } from "../utils/strategyTournament/index.js"

function getTournamentTemplate(tournament) {
    const tourneyFormats = new Map();
    tourneyFormats.set(1, "Suizo")
    tourneyFormats.set(2, "Por grupos")
    tourneyFormats.set(3, "Todos contra todos")

    return `
    <li class="mb-4 bg-gray-700 rounded p-4" >
        <h2 class="text-2xl font-bold">${tournament.name}</h2>
        <p>Formato: ${tourneyFormats.get(tournament.format)}
        <p>Estado: ${tournament.status}</p>
        <p>${tournament.description}</p>
        <button hx-get="tournaments/details/${tournament.tournament_code}" hx-swap="outerHTML" hx_trigger="click" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Detalles</button>
    </li>`

}

function getParticipantTemplate(participant, tournament_code) {
    const filePath = "/images/default.jpg"
    return `
    
            <li class="mb-4 bg-gray-700 rounded p-4 flex items-center">
                <div class="mx-auto"> 
                    <h2 class="text-1xl font-bold text-white">Nombre: ${participant[0].username}</h2>
                    <p class="text-gray-300">Nivel de habilidad: ${participant[0].skill}</p>
                </div>
            <img src="${filePath}" alt="Imagen predeterminada" class="ml-auto small-image">
            </li>
            
        
    `
}

function getParticipantNames(participant) {
    // <form action="/selectedParticipants" method="post">
    return `
        <select hx-post="createTournament/selectedParticipants" name="selectedParticipants" id="selectedParticipants" hx-swap="outerHTML" multiple class="bg-gray-700 rounded p-4">
            <option value="${participant.participant_code}">Nombre: ${participant.username}</option>
        </select>`
}

async function getSwissBracketTemplate(tournament_code) {
    const players = await database.getTournamentParticipants(3)
    console.log(players)
    if (!players || players.length === 0) {
        return ''
    }
    const tourneyContext = new TournamentContext()
    tourneyContext.setStrategy(new SwissTournamentStrategy())
    const brackets = tourneyContext.createBrackets(players, 3)
    console.log(brackets)

    const bracketHTML = brackets.map(bracket => `
        <div class="round space-y-4">
            <div class="match bg-blue-600 border-gray-300 p-4 flex justify-center items-center">
                <div>${bracket[0].username}</div>
                <div class="mx-4">vs</div>
                <div>${bracket[1].username}</div>
            </div>
        </div>
    `).join('');

    return `
        <div class=" p-8 rounded-lg">
        <h1 class="text-4xl font-bold text-center mb-8">Brackets del torneo suizo</h1>
            ${bracketHTML}
        </div>
    `;
}

async function getFreeForAllBracketTemplate(tournament_code) {
    const players = await database.getTournamentParticipants(3);
    console.log(players);
    if (!players || players.length === 0) {
        return '';
    }

    // Group players into rounds of 4
    const rounds = [];
    for (let i = 0; i < players.length; i += 4) {
        rounds.push(players.slice(i, i + 4));
    }

    const bracketHTML = `
        <div class="bracket">
        <h1 class="text-4xl font-bold text-center mb-8">Brackets del torneo FFA</h1>
            ${rounds.map((round, index) => `
                <!-- Round ${index + 1} -->
                <div class="round">
                    ${round.map(player => `<div class="match bg-blue-600 border-gray-300">${player.username}</div>`).join('')}
                </div>
            `).join('')}
            <!-- Ganador -->
            <div class="round">
                <div class="match bg-blue-600 border-gray-300">Ganador del Torneo FFA</div>
            </div>
        </div>
    `;

    return bracketHTML;
}

async function getGroupBracketTemplate(tournament_code) {
    const players = await database.getTournamentParticipants(3);
    console.log(players);
    if (!players || players.length === 0) {
        return '';
    }

    // Group players into rounds of 4
    const rounds = [];
    for (let i = 0; i < players.length; i += 4) {
        rounds.push(players.slice(i, i + 4));
    }

    const bracketHTML = `
        <div class="container mx-auto py-8">
            <h1 class="text-4xl font-bold text-center mb-8">Brackets del Torneo por Grupos</h1>
            ${rounds.map((round, index) => `
                <!-- Grupo ${String.fromCharCode(65 + index)} -->
                <div class="group">
                    <h2 class="group-header">Grupo ${String.fromCharCode(65 + index)}</h2>
                    <div class="round">
                        ${round.map(player => `<div class="match bg-blue-600 border-gray-300">${player.username}</div>`).join('')}
                    </div>
                </div>
            `).join('')}
            <!-- Playoff -->
            <div class="group">
                <h2 class="group-header">Playoff</h2>
                <div class="round">
                    <div class="match bg-blue-600 border-gray-300">Ganador Grupo A vs Segundo Grupo B</div>
                    <div class="match bg-blue-600 border-gray-300">Ganador Grupo B vs Segundo Grupo A</div>
                </div>
            </div>
            <!-- Final -->
            <div class="group">
                <h2 class="group-header">Final</h2>
                <div class="round">
                    <div class="match bg-blue-600 border-gray-300">Finalista 1 vs Finalista 2</div>
                </div>
            </div>
        </div>
    `;

    return bracketHTML;
}



export { getTournamentTemplate, getParticipantTemplate, getParticipantNames, getSwissBracketTemplate, getFreeForAllBracketTemplate, getGroupBracketTemplate }
