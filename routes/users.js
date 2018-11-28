const express = require('express');
const router = express.Router();
const connection = require('../conf')

router.get('/get',(req, res) => {
    connection.query('SELECT users.email, users.password, companies.name AS company_name FROM users INNER JOIN companies ON users.id_companies = companies.id_company', (err, results) =>{
        if (err){
            res.status(500).send('Erreur lors de la récupération des users');
        }
        else{
            res.json(results);
        }
    })
});

// router.post('/post', (req, res) => {

//     connection.query('', () => {
//         if(){

//         }else{

//         }

//     });

// });

module.exports = router;