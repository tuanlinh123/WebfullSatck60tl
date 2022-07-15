const express = require('express');
const app = express();
const usersRouter = require('./modules')
app.use(express.json())
app.use('/api/user', usersRouter);
app.listen(8080, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("Sever start");
  });
 
