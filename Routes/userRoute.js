import express from 'express';
const userRouter = express.Router();
import userController from '../Controllers/userController.js';

userRouter.get("/", userController.index);

userRouter.post("/", userController.create);

userRouter.get("/:id", userController.getById);

userRouter.put("/:id", userController.updateById);

userRouter.delete("/:id", userController.deleteById);

export default userRouter;