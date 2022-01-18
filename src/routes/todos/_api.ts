import type {Request} from '@sveltejs/kit';
// TODO: persist in database
let todos:Todo[] = []

const homeRedirect = { 
    status:303,
    headers: {
        location: '/'
    }}

export const api = (request:Request,todo?:Todo) =>{
    let body = {}
    let status = 500
    switch (request.method.toUpperCase()) {
        case 'GET':
            return {
                status: 200,
                body: todos
            }
        case 'POST':
            todos.push(todo)
            body = todo
            status = 201
            break
        case 'DELETE':
            todos = todos.filter(todo => todo.uid !== request.params.uid)
            break
        default:
            break
    }
    if (request.method.toUpperCase() !=="GET"){
        return homeRedirect
    }
    return {status,body}
}