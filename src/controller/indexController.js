const homePage = (req,res)=>{
    res.status(200).send(`
    <h1>Welcome to Room Bookings</h1>
    `)
}

export default {
    homePage
}