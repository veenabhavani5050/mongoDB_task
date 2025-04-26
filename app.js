// application related code
import express from 'express';
import userRouter from './routers/userRouters.js';
import morgan from 'morgan';
import logger from './utils/logger.js';
import errorRoute from './utils/errorRoute.js';

const app = express();
// middleware to log the all the request
// app.use(morgan('dev'))


// custom middleware
app.use(logger)

app.use('/users',userRouter);

// error handling router
app.use(errorRoute); 

export default app;