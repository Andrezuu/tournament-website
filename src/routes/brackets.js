import express from 'express'
import * as database from "../services/index.js"
import * as utils from "../utils/htmlTemplates.js"
import path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
const bracketsRouter = express.Router()

bracketsRouter.get('/', async (req, res) => {
    const a = await utils.getGroupBracketTemplate(2)
    
    console.log(a, 'when te llega')
    res.send(a)
})

export default bracketsRouter