const express = require('express')
const cors = require('cors')

const app = express()

let corOptions = {
    origin :'https://localhost:8080' 
}


//middelwewars
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended : true }))


//routers

const departementRouter = require('./routes/departementRouter')
const routerUser = require('./routes/userRouter')
app.use('/departement', departementRouter)
app.use('/updateDepartement', departementRouter)
app.use('/allDepartements', departementRouter)
app.use('/', departementRouter)
app.use('/deleteDepartement', departementRouter)

app.use('/updateUser', routerUser)
app.use('/User', routerUser)




// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


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
