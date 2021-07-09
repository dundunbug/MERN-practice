import axios, { AxiosResponse } from 'axios'
import { truncate } from 'fs'

const getTodos = async (): Promise<AxiosResponse<Array<ITodo>>> => {
// TODO: Should call GET endpoint
    try{
        const todos = await axios.get('/api/todos')
        return todos
    }catch (error){
        console.error(`Get /api/todos error: ${error}`)
        throw new Error(error)
    }
}

// TODO: Should call POST endpoint
const addTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
    // TODO: Should call PUT endpoint
        try {
            const newTodo = {
                ...todoBody,
                status: false
            }
            const todo = await axios.post('/api/todos', newTodo)
            return todo
        }catch (error){
            console.error(`POST /api/todos error: ${error}`)
            throw new Error(error)
        }
    
    }

const updateTodo = async (todoBody: ITodo): Promise<AxiosResponse<ITodo>> => {
// TODO: Should call PUT endpoint
    try {
        const newTodo = {
            ...todoBody,
            status: truncate
        }
        const todo = await axios.put(`/api/todos/${todoBody._id}`, newTodo)
        return todo
    }catch (error){
        console.error(`PUT /api/todos error: ${error}`)
        throw new Error(error)
    }

}

const deleteTodo = async (id: string): Promise<AxiosResponse> => {
// TODO: Should call DELETE endpoint
try {
    const todo = await axios.put(`/api/todos/${id}`)
    return todo
}catch (error){
    console.error(`delete /api/todos error: ${error}`)
    throw new Error(error)
}
}

export { getTodos, addTodo, updateTodo, deleteTodo }
