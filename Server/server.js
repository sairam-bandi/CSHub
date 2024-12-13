import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import mongoose from 'mongoose'

import connect from './Database/connection.js'
import updates from '../Server/models/updateSchema.js'
import User from '../Server/models/userSchema.js'
import bodyParser from 'body-parser'
import multer from 'multer'
import fs from "fs"

const app = express();
const path="../client/public/timeTable"
// const pathCalendar="../client/public/calendars"
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(multer({"dest":path}).any())
config();

const port = process.env.PORT || 8080;

connect().then()
const db = mongoose.connection


// UPDATES module
app.get('/hod/updates', (req, res) => {
    updates.find()
      .sort('-createdAt') // Sort by newest first
      .limit(10) // Limit to 10 updates
      .then(updates => {
        res.json(updates);
      })
      .catch(error => {
        console.error('Error fetching updates:', error);
        res.status(500).send('Internal server error');
      });
  });


  app.post('/hod/updates', (req, res) => {
    console.log(req.body.text);
    updates.insertMany({text : req.body.text})
      .then(() => {
        // res.send('Update created');
      })
      .catch(error => {
        console.error('Error creating update:', error);
        // res.json('Internal server error');
      });
    res.json("This is post request")
  });

  app.delete('/hod/updates', (req,res) => {
    updates.deleteMany()
  })

// Timetable post

  app.post("/timeTableManager",function(req,res){
    console.log(req.body,req.files)
    try{
      fs.unlink(path+"/"+req.body.year+".png",function(err){
        console.log(err)
      })
    }
    catch(err){

    }
    fs.rename(path+"/"+req.files[0].filename,path+"/"+req.body.year+".png",function(err){
      console.log(err)
    })
  })


  // academic calendar post
  app.post("/calendarManager",function(req,res){
    console.log(req.body,req.files)
    try{
      fs.unlink(path+"/"+req.body.sem+".png",function(err){
        console.log(err)
      })
    }
    catch(err){

    }
    fs.rename(path+"/"+req.files[0].filename,path+"/"+req.body.sem+".png",function(err){
      console.log(err)
    })
  })

// User model

app.post("/login", async(req,res) => {
  const {email,password} = req.body;

  try {
    const check = await User.findOne({email:email})
    let msg = ""
    if(check){
      if(check.password === password){
        msg = "User correct"
      }
      else{
        msg = "Password Incorrect"
      }
    }
    else{
      msg = "User doesn't exist"
    }
    res.json(msg)

  } catch (error) {
    res.json("User doesn't exist")
  }

})

app.post("/register", async(req,res) => {
  const {email,password} = req.body;
  console.log(req.body)
  const data = {
    email : email,
    password : password
  }
  try {
    const check = await User.findOne({email:email})
    if(check){
      res.json("User exist")
    }
    else{
      console.log(data)
      // console.log(User.find())
      await User.insertMany({email:email, password:password})
      res.json("User doesn't exist")
    }
  } catch (error) {
    res.json("User doesn't exist")
  }

})

app.listen(port, () => {
    console.log("Server Started")
})