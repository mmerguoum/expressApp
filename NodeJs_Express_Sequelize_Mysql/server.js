const express = require('express')
const cors = require('cors')
const Departement = require('./models/DepartementModel')
const User = require('./models/UserModel')

const app = express()

let corOptions = {
    origin :'https://localhost:3000' 
}


//middelwars
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({ extended : true }))


//routers
const departementRouter = require('./routes/departementRouter')
const routerUser = require('./routes/userRouter')

app.use('/', departementRouter);
app.use('/', routerUser)
app.use('/User', routerUser)




// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//testing 
app.get('/',(req,res) => {
    res.json({message : 'hello from api'})
})



//PORT
const PORT = process.env.PORT || 3000


//server
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
