// create routers
import express from 'express';
import userController from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/',userController.getUsers)
// export router
export default userRouter;