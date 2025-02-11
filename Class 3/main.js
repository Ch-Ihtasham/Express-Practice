import mongoose from "mongoose";
import express from 'express'
import { Todo } from "./Models/Todo.js";
let connection = await mongoose.connect('mongodb://localhost:27017/todo')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    const todo = new Todo({ title: 'hey this is my first todo', desc: 'this is our title is description', isDone: false })
    todo.save()
    res.send('hello world')
})

app.get('/a', async (req, res) => {
    const todo = await Todo.findOne({})
    res.json({ title: todo.title, desc: todo.desc })
})

app.listen(port, () => {
    console.log(`Example app listening  on port ${port}`)
})