import express from 'express';
import { config } from './config/index.js'
import RouterBuilder from './routes/RouterBuilder.js'
import path from 'path'
import { fileURLToPath } from 'url'

const public_dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express();
const server_config = config;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routerBuilder = new RouterBuilder()
const router = routerBuilder
    .setTournamentRoutes()
    .setParticipantRoutes()
    .setCreateTournamentRoutes()
    .build()
app.use(router)

app.listen(server_config.server_port, () => {
    console.log(`Servidor en el puerto ${server_config.server_port}`);
})

export default public_dirname