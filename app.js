import express from 'express';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

var app = express();

app.use('/', indexRouter);
app.use('/users', usersRouter);



app.listen(3000, ()=>{
    console.log("listening on http://localhost:3000")
})

export default app;