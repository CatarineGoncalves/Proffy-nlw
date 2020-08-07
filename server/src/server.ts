import express, { response, request } from 'express'
import cors from 'cors'
import routes from './routes';

const app = express();

app.use((cors()));
app.use(express.json());
app.use(routes);


app.listen(3333);





















































// app.post('/users', (request, response)  => {
//     console.log(request.body)


//     const users= [
//         { name: "diego"},
//         {name: "lucas"}
//     ]
//     return response.json(users)
// });

// app.delete('/users/:id', (request, response)  => {
//     console.log(request.params)


//     const users= [
//         { name: "diego"},
//         {name: "lucas"}
//     ]
//     return response.json(users)
// });

// app.get('/users', (request, response)  => {
//     console.log(request.query)


//     const users= [
//         { name: "diego"},
//         {name: "lucas"}
//     ]
//     return response.json(users)
// });

// //LocalHost:3333

// app.listen(3333);
