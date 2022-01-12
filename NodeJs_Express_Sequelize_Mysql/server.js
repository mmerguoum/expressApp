const express = require('express')
const cors = require('cors')

const app = express()

let corOptions = {
    origin :'https://localhost:8081' 
}


//middelwewars
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended : true }))


//routers

const router = require('./routes/departementRouter.js')
app.use('/api/departements', router)
// app.use('/api/users', router)


//testing api
app.get('/',(req,res) => {
    res.json({message : 'hello from api'})
})

//PORT
const PORT = process.env.PORT || 8080


//server
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
