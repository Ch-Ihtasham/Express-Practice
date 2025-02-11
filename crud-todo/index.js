import express from "express"
import dotenv from "dotenv"
import connectToDb from "./database/db.js"
import { todo } from "./Models/todo.model.js"

dotenv.config()
const app = express()
const port = process.env.port

app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

connectToDb();

// displaying todo 

app.get('/todos', async (req, res) => {
    try {
        const result = await todo.find()
        res.send({
            success: true,
            message: 'Data retrive successfull',
            data: result,
        })
    }
    catch (error) {
        res.send({
            success: false,
            message: 'Fail to retrive data',
            error: error.message,
        })
    }
})

// creating to do 

app.post('/create-todo', async (req, res) => {
    const todoDetails = req.body;
    try {
        const createTodo = await todo.create(todoDetails)
        res.send({
            success: true,
            message: 'Success to create todo',
            data: createTodo,
        })

    } catch (error) {
        res.status(400).send({
            success: false,
            message: 'Failed to create todo',
            error: error.message,
        });
    }
})

// find by id  and diplay particular id

app.get('/:id', async (req, res) => {
    const todoId = req.params.id
    try {
        const result = await todo.findById(todoId);
        if (!result) {
            return res.status(404).send({
                success: false,
                message: 'Todo not found',
            });
        }
        res.status(200).send({
            success: true,
            message: 'Todo retrieved successfully',
            data: result,
        });
    } catch (error) {
        res.send({
            success: false,
            message: 'Failed to retrieve todo',
            error: error.message,
        });
    }
})

// update the to do 

app.patch('/:todoId', async (req, res) => {
    const todoId = req.params.todoId;
    const updateTodo = req.body;
    try {
        const result = await todo.findByIdAndUpdate(todoId, updateTodo, {
            new: true
        })
        res.send({
            success: true,
            message: 'Successfully Updated the todo',
            data: result
        })
    }
    catch (error) {
        res.send({
            success: false,
            message: 'Did not update the todo',
            error: error.message
        })
    }
})

// for delete 

app.delete('/delete/:todoId', async (req, res) => {
    const todoId = req.params.todoId;
    try {
        await todo.findByIdAndDelete(todoId)
        res.send({
            success: true,
            message: 'Deleted successfully'
        })
    }
    catch (error) {
        res.send({
            success: false,
            message: 'fail to delete'
        })
    }
})

app.listen(port, () => {
    console.log(`app is running on ${port}`)
})