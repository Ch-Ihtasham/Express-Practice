// const express = require('express')
import express from 'express'
// require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3000
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(process.env.port, () => {
    console.log(`app running at port ${port}`)
})