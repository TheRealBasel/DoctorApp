const express = require("express");
const router = express.Router();
const doctor = require("../models/doctor");
const jwt = require("jsonwebtoken");
const { checkSchema, validationResult } = require('express-validator');
const secretKey = "s3cr3t";

// Get account
router.get("/", async (request, response) => {
    try {
        const foundedDoctor = await account.findOne({
            ...request.query
        });
        if (foundedDoctor) {
            response.json({ status: "ok", data: foundedDoctor });    
        }else{
            response.json({ error: "No Account" })
        }
    } catch (error) {
        response.json({ error: error })
    }
});

router.put("/", async ( request, response ) => {
    try {
        if ( request.body.doctorId && request.body.update ){
            const foundedDoctor = await account.findOne({
                ...request.body.doctorId
            });
            if ( foundedDoctor ){

                await foundedDoctor.save();
                response.json({ status: "ok", data: foundedDoctor })
            }else{
                response.json({ error: "No account found"})
            }    
        }
    } catch (error) {
        response.json({ error: error })
    }
})

router.delete("/", async ( request, response ) => {
    try {
        if ( request.body.doctorId ){
            const foundedDoctor = await account.findOne({
                ...request.body.doctorId
            });
            if ( foundedDoctor ){
                await foundedDoctor.deleteOne();
                await foundedDoctor.save();
                response.json({ status: "ok", data: foundedDoctor })
            }else{
                response.json({ error: "No account found"})
            }    
        }
    } catch (error) {
        response.json({ error: error })
    }
})
  
module.exports = router;