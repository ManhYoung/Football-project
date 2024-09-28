const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./config/db/db.js')
const competitionService = require('./modules/competition/service.js')
const clubServive = require('./modules/club/service.js')
const playerService = require('./modules/player/service.js')
const marketValue = require('./modules/markerValue/service.js')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port, async () => {
    await db.connect();
    // await competitionService.index("laliga")


    // await clubServive.index()
    // await clubServive.profile()


    // await playerService.index()
    // await playerService.profile()
    // await playerService.transfers()
    // await playerService.stats()
    // await playerService.injuries()


    // await marketValue.index()
    console.log(`Example app listening at http://localhost:${port}`)
});