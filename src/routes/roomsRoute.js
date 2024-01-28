import express from "express"
import roomController from "../controller/roomController.js"

const router = express.Router()

//room routes
router.post('/createRoom',roomController.addRoom)
router.post('/bookRoom',roomController.bookRoom)
router.get('/getDataById/:id',roomController.getDataById)
router.get('/allRoomsData',roomController.getAllRoomsBookedData)
router.get('/allCustomersData',roomController.getAllCustomersBookedData)

export default router