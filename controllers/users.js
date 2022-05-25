//packages import
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

//mysql connection import
const DB = require('../db')


//user registration method
exports.Register = async (req, res) => {
    try{
        
        DB.query(`SELECT * FROM users WHERE email_address = '${req.body.email_address}'`, async function (err, result, fields) {
            if (err) throw err;

            //check if the user exists
            if(result.length > 0){
                return res.status(403).send({ message: "Email already exists"})
            }

            //hash password with bcrypt package
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


//user login method
exports.Login = async (req, res) => {
    try {
        DB.query(`SELECT * FROM users WHERE email_address = '${req.body.email_address}'`, async function (err, result, fields) {
            if (err) throw err;

            //check if the user exists
            if(result.length == 0){
              
                return res.status(404).send({ message: "User with that email does not exist."})
            }

        //check if password matches password supplied
        const checkpassword = await bcrypt.compare(req.body.password, result[0].user_password)

        if(!checkpassword){
            return res.status(401).json({
                message: 'Email and password do not match'
            });
        }

        //sign a jwt token for the user
        const token = jwt.sign({ _id: result[0].id.toString()}, 'luminaapi!!final')

        if(result[0].favourite_movies != null) {
            
             //change the favourites_movies data from string to array
        const new_arr = result.map(item => {
            return {
                ...item,
                favourite_movies: []
            }
        })

        const data = new_arr[0];
        return res.send({data, token: token})
        }

        const data = result[0];
        res.send({ data, token: token})
    });
    }
    catch(e){
        res.status(400).send({ error: 'Invalid Credentials'})
    }

}



//method for getting user favourites movies
exports.getFavoritesById = async (req, res) => {
    try {
        DB.query(`SELECT favourite_movies FROM users where id = ${req.query.id}`, function (err, result, fields) {
            if (err) throw err;
        
            if(result[0].favourite_movies != null){
            if(result[0].favourite_movies.length > 0) {
        //change the favourites_movies data from string to array     
            let favourite_movies= result[0].favourite_movies.split(",")
       
            res.send({ favourite_movies })  
                }
            else{
                res.send({favourite_movies: []})  
            }
        }
        else{
            res.send({favourite_movies: []})  
        }
          });
       
    } catch (error) {
        res.status(500).send({error: error})
    }
   
}

//method for updating user favourites movies
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



 