import {findIndex} from "../common/helper.js"

//json data
const newRoom = [
    {
        No_of_seats_available: 20,
        amenities:"Tables & Chairs",
        price_per_hour:"$12",
        id:1
    },
    {
        No_of_seats_available: 25,
        amenities:"Tables & Chairs",
        price_per_hour:"$15",
        id:2
    }
]

const newBooking = [
    {
        roomId: 1,
        customer_name:"Vijay",
        booking_date:"23-01-2024",
        start_time:"26-01-2024_06:00:00",
        end_time:"26-01-2024_20:00:00",
        id:1
    },
    {
        roomId: 2,
        customer_name:"Jhon",
        booking_date:"23-01-2024",
        start_time:"25-01-2024_07:00:00",
        end_time:"25-01-2024_20:00:00",
        id:2
    }
]

const allRooms = [
    {        
        room_name : "Alpha",
        booking_status:true,
        customer_name:"Vijay",
        booking_date:"23-01-2024",
        start_time:"26-01-2024_06:00:00",
        end_time:"26-01-2024_20:00:00",
    },
    {        
        room_name : "Beta",
        booking_status:true,
        customer_name:"Jhon",
        booking_date:"23-01-2024",
        start_time:"25-01-2024_07:00:00",
        end_time:"25-01-2024_20:00:00",
    },
]

const allCustomers = [
    {        
        room_name : "Alpha",
        customer_name:"Vijay",
        booking_date:"23-01-2024",
        start_time:"26-01-2024_06:00:00",
        end_time:"26-01-2024_20:00:00",
    },
    {        
        room_name : "Beta",
        customer_name:"Jhon",
        booking_date:"23-01-2024",
        start_time:"25-01-2024_07:00:00",
        end_time:"25-01-2024_20:00:00",
    },
]

const customerDataById = [
    {        
        id : 1,
        room_name : "Alpha",
        customer_name:"Vijay",
        booking_date:"23-01-2024",
        start_time:"26-01-2024_06:00:00",
        end_time:"26-01-2024_20:00:00",
        booking_id:11,
        booking_status:true
    },
    {        
        id : 1,
        room_name : "Alpha",
        customer_name:"Vijay",
        booking_date:"23-01-2024",
        start_time:"26-01-2024_06:00:00",
        end_time:"26-01-2024_20:00:00",
        booking_id:11,
        booking_status:true
    },
    {        
        id : 1,
        room_name : "Alpha",
        customer_name:"Vijay",
        booking_date:"23-01-2024",
        start_time:"26-01-2024_06:00:00",
        end_time:"26-01-2024_20:00:00",
        booking_id:11,
        booking_status:true
    },
    {        
        id : 2,
        room_name : "Beta",
        customer_name:"Jhon",
        booking_date:"23-01-2024",
        start_time:"25-01-2024_07:00:00",
        end_time:"25-01-2024_20:00:00",
        booking_id:12,
        booking_status:true
    },
    {        
        id : 2,
        room_name : "Beta",
        customer_name:"Jhon",
        booking_date:"23-01-2024",
        start_time:"25-01-2024_07:00:00",
        end_time:"25-01-2024_20:00:00",
        booking_id:12,
        booking_status:true
    }
]

//API's

const addRoom = (req,res) => {
    try {
        let id = newRoom.length? newRoom[newRoom.length-1].id+1:1
        req.body.id = id;
        newRoom.push(req.body)
        res.status(200).send({
            message: "Room added",
            newRoom
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal error in room adding"
        })
    }
}

const bookRoom = (req,res) => {
    try {
        let id =newBooking.length?newBooking[newBooking.length-1].id+1:1
        req.body.id = id;
       newBooking.push(req.body)
        res.status(200).send({
            message: "booking created",
           newBooking
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal error in room booking"
        })
    }
}

const getDataById = (req,res) => {
    try {
        // console.log(req.params);
        const {id} = req.params
            let index = findIndex(customerDataById,id)
            if(index!==-1){
                res.status(200).send({
                    message: "User Id feteched",
                    customerDataById
                })
            }else{
                res.status(400).send({
                    message: "Invalid User Id"
                })
            }
    } catch (error) {
        res.status(500).send({
            message:"Internal error in user data fetch"
        })
    }
}

const getAllRoomsBookedData = (req,res) => {
    try {        
        res.status(200).send({
            message : "Rooms data fetched",
            allRooms
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal Server Error"
        })
    }
}

const getAllCustomersBookedData = (req,res) => {
    try {        
        res.status(200).send({
            message : "Customers data fetched",
            allCustomers
        })
    } catch (error) {
        res.status(500).send({
            message : "Internal Server Error"
        })
    }
}

export default{
    addRoom,
    bookRoom,
    getDataById,
    getAllRoomsBookedData,
    getAllCustomersBookedData
}
