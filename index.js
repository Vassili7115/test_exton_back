const express = require('express');
const cors = require('cors');

const usersRouter = require('./routes/users');

const app = express();
const port = 3001;


app.use(cors())
//bodyParser
app.use('/users', usersRouter)

app.listen(port, (err) =>{
    if (err){
        throw new Error ('Il y a une erreur');
    }
    console.log(`server in listening on ${port}`)
})

