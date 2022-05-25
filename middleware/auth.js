//packages import
const jwt = require('jsonwebtoken')

//mysql connection import
const DB = require('../db')


//middleware to authenticate user right to resource
exports.Auth = async (req, res, next) => {

    try{
        if(req.header('Authorization') === undefined){
            return res.status(401).send({ error: 'Please login to continue'})
        }
            const token = req.header('Authorization').replace('Bearer ', '')
            const verifytoken = jwt.verify(token, 'luminaapi!!final')
           
            DB.query(`SELECT * FROM users WHERE id = ${verifytoken._id}`, async function (err, result, fields) {
                if (err) throw err;
                if(result.length < 0){
                    throw new Error()
                }

                req.token = token

                next()

            });
    
        }
        catch(e){
            console.log(e)
            res.status(401).send({ error: 'Please login to continue'})
        }
   

    

}