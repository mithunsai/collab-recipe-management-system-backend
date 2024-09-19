import express from 'express';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js'
import './config/db/db.js';
import cors from 'cors'


var app = express();

app.use(express.json({type: 'application/json'}))
app.use(cors())

app.use('/', indexRouter);
app.use('/auth', authRouter)
app.use('/users', usersRouter);



app.listen(3000, ()=>{
    console.log("listening on http://localhost:3000")
})

export default app;