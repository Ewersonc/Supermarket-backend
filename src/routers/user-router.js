import express from 'express';
import userController from '../controllers/user-controller.js';

const router = express.Router();

router.route('/me')
  .get(userController.me);

router.route('/:id')
  .delete(userController.deleteOne)
  .get(userController.getOne)
  .put(userController.updateOne);

router.route('/')
  .get(userController.getAll)
  .post(userController.create);

router.route('/register')
  .post(userController.register);

router.route('/login')
  .post(userController.login);

export default router;
