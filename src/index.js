import express from 'express'
import IndexRoutes from './routes/IndexRoute.js'

const app = express()
const PORT = 7000

app.use(express.json())
app.use('/',IndexRoutes)


app.listen(PORT, ()=>console.log(`Listening to ${PORT}`))