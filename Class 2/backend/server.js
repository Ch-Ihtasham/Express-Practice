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
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'first joke',
            content: 'this is a joke'
        },
        {
            id: 2,
            title: 'second joke',
            content: 'this is a joke'
        },
        {
            id: 3,
            title: 'third joke',
            content: 'this is a joke'
        },
        {
            id: 4,
            title: 'forth joke',
            content: 'this is a joke'
        },
        {
            id: 5,
            title: 'fifth joke',
            content: 'this is a joke'
        }
    ]
    res.send(jokes)

})
app.listen(process.env.port, () => {
    console.log(`app running at port ${process.env.port}`)
})