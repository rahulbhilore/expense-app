import express from "express";
import dotenv from "dotenv";
import app from "./app.js"
import sequelize from "./config/database.js";
import User from "./models/user.model.js";




dotenv.config()






sequelize.authenticate()
    .then(()=>{
        console.log("Database connected Successfully");
    })
    .catch((err)=>{
        console.log("Database Connection Failed", err);
    });


sequelize.sync({})
    .then(()=>{
        console.log("Database Synced");
    })
    .catch((err)=>{
        console.log("Database synced error", err);
    })

app.listen();