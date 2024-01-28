import express from "express"
import indexController from "../controller/indexController.js"
import roomsRoute from "./roomsRoute.js"
const router = express.Router()

//home route
router.get('/',indexController.homePage)

//other routes
router.use('/rooms',roomsRoute)

export default router