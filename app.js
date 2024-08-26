import express from 'express';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import './config/db/db.js';


var app = express();

app.use(express.json({type: 'application/json'}))
app.use('/', indexRouter);
app.use('/users', usersRouter);



app.listen(3000, ()=>{
    console.log("listening on http://localhost:3000")
})

export default app;