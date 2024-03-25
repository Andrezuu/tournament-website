import express from 'express'
import * as utils from "../utils/htmlTemplates.js"

const bracketsRouter = express.Router()

bracketsRouter.post('/', async (req, res) => {
    const format = req.body.selectedValue
    console.log(format)
    let html
    if (format == 1) {
        html = await utils.getSwissBracketTemplate(2)
    } else if (format == 2) {
        html = await utils.getFreeForAllBracketTemplate(2)
    } else {
        html = await utils.getGroupBracketTemplate(2)
    }

    res.send(html)
})

export default bracketsRouter