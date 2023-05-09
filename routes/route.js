import express from 'express';
import {
  addUser,
  getUsers,
  getUser,
  deleteUsers,
  addUsers,
} from '../controller/user-controller.js';
let router = express.Router();

router.post('/add', addUser);
router.post('/post', addUsers);
router.get('/get', getUsers);
router.get('/get/:newId', getUser);

router.delete('/delete/:newId', deleteUsers);

export default router;

// import express from 'express';
// import {
//   addUser,
//   getUsers,
//   deleteUsers,
//   getUser,
//   postUser,
// } from '../controller/user-controller.js';
// let router = express.Router();

// router.post('/add', addUser);
// router.get('/get', getUsers);
// router.get('/get/:newId', getUser);
// router.post('/post', postUser);
// router.delete('/delete/:name', deleteUsers);

// export default router;
