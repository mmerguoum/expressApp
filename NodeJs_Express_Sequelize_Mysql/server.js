const express = require('express')
const cors = require('cors')

const app = express()

let corsOptions = {
    origin :'https://localhost:3000' 
}


//middelwewars
app.use(cors(corsOptions))

app.use(express.json())

app.use(express.urlencoded({extended : true}))


//routers

const router1 = require('./routes/departementRouter.js')
app.use('/api/departements', router1)

const router2 = require('./routes/userRouter.js')
app.use('/api/users', router2)


//testing api
app.get('/',(req,res) => {
    res.json({message : 'hello from api'})
})

//PORT
const PORT = process.env.PORT || 3000


//server
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
