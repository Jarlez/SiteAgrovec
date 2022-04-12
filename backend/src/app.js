const express = require('express');
const cors = require('cors')
const routes = require('./routes');
const morgan = require('morgan');
const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json()); 

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(morgan('dev'));

// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Header',
//     'Origin, X-Requrested-With, Content-Type, Accept, Authorization'
//   );

//   if(req.method == 'OPTIONS') {
//     res.headers('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
//     return res.status(200).send({});
//   }

//   next();
// });

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  return res.send({
    error: {
      message: error.message
    }
  });
});

module.exports = app;