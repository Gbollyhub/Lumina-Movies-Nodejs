const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const DB = require('../db')

exports.Register = async (req, res) => {
    try{
        
        DB.query(`SELECT * FROM users WHERE email_address = '${req.body.email_address}'`, async function (err, result, fields) {
            if (err) throw err;
            if(result.length > 0){
                return res.status(403).send({ message: "Email already exists"})
            }


            hash_password = await bcrypt.hash(req.body.password, 8)

            var sql = `INSERT INTO users (first_name, last_name, email_address, phone_number, user_password) 
                      VALUES ('${req.body.first_name}','${req.body.last_name}', '${req.body.email_address}', '${req.body.phone_number}', '${hash_password}')`;
    
            DB.query(sql, function (err, result, fields) {
                if (err) throw err;
                if(result){
                    res.status(201).send({message: "User Registration Successful"})
                }
              });


          });
        
     
    }
    catch(e){
        console.log(e)
        res.status(500).send({ message: 'Error creating user'})
    }

}

exports.Login = async (req, res) => {
    try {
        DB.query(`SELECT * FROM users WHERE email_address = '${req.body.email_address}'`, async function (err, result, fields) {
            if (err) throw err;
           
            if(result.length == 0){
                return res.status(404).send({ message: "User with that email does not exist. Please signup."})
            }

        const checkpassword = await bcrypt.compare(req.body.password, result[0].user_password)

        if(!checkpassword){
            return res.status(401).json({
                error: 'Email and password do not match'
            });
        }

        const token = jwt.sign({ _id: result[0].id.toString()}, 'luminaapi!!final')

        const new_arr = result.map(item => {
            return {
                ...item,
                 favourite_movies: item.favourite_movies.split(",")
            }
        })

        const data = new_arr[0];
        res.send({ data, token: token})
    });
    }
    catch(e){
        res.status(400).send({ error: 'Invalid Credentials'})
    }

}




exports.getFavoritesById = async (req, res) => {
    try {
        DB.query(`SELECT favourite_movies FROM users where id = ${req.query.id}`, function (err, result, fields) {
            if (err) throw err;
           const new_arr = result.map(item => {
                return {
                     favourite_movies: item.favourite_movies.split(",")
                }
            })
            const data = new_arr[0];
        res.send({ data})
          });
       
    } catch (error) {
        res.status(500).send({error: error})
    }
   
}

exports.updateFavourites = async (req, res) => {
    try {
        DB.query(`UPDATE users SET favourite_movies = '${req.body.favourite_movies}' WHERE id = ${req.body.id}`, function (err, result, fields) {
            if (err) throw err;
            if(result){
                res.status(200).send({message: "Favourites Updated Successful"})
            }
          });
    } catch (error) {
        res.status(500).send({error: error})
    }
   
}



 