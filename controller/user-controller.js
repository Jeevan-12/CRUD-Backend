import connection from '../database/db.js';
export const addUser = async (req, resp) => {
  try {
    let connect = await connection();
    let postData = await connect.insertOne(req.body);
    resp.status(200).json({ message: 'data sent to db', data: postData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
};

export const getUsers = async (req, resp) => {
  try {
    let connect = await connection();
    let getData = await connect.find().toArray();
    resp.status(200).json({ message: 'data sent to frontend', data: getData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
};

export const deleteUsers = async (req, resp) => {
  try {
    let connect = await connection();
    let deleteData = await connect.deleteOne({ newId: req.params.newId });
    resp.status(200).json({ message: 'data deleted', data: deleteData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
};

export const getUser = async (req, resp) => {
  try {
    let connect = await connection();
    let getData = await connect.find({ newId: req.params.newId }).toArray();
    console.log(getData);
    resp.status(200).json({ message: 'data received for edit', data: getData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
};

export const addUsers = async (req, resp) => {
  try {
    let connect = await connection();
    let postData = await connect.updateOne(
      { newId: req.body.newId },
      { $set: { name: req.body.name, age: req.body.age } }
    );
    console.log(getData);
    resp.status(200).json({ message: 'data updated', data: postData });
  } catch (error) {
    resp.status(400).json({ message: 'error', error });
  }
};

// import Connection from '../database/db.js';
// export const addUser = async (req, resp) => {
//   try {
//     let connection = await Connection();
//     let addData = await connection.insertOne(req.body);
//     resp.status(200).json({ message: 'data sent to db', data: addData });
//   } catch (error) {
//     resp.status(400).json({ message: 'errror', error });
//   }
// };

// export const getUsers = async (req, resp) => {
//   try {
//     let connection = await Connection();
//     let getDatas = await connection.find().toArray();
//     resp
//       .status(200)
//       .json({ message: 'data received to frontend', data: getDatas });
//   } catch (error) {
//     resp.status(400).json({ message: 'errror', error });
//   }
// };

// export const deleteUsers = async (req, resp) => {
//   try {
//     let connection = await Connection();
//     let deleteDatas = await connection.deleteOne({ name: req.params.name });
//     resp.status(200).json({ message: 'data deleted', data: deleteDatas });
//   } catch (error) {
//     resp.status(400).json({ message: 'errror', error });
//   }
// };

// export const getUser = async (req, resp) => {
//   try {
//     let connection = await Connection();
//     let getData = await connection.find({ newId: req.params.newId }).toArray();
//     resp.status(200).json({ message: 'data received for edit', data: getData });
//   } catch (error) {
//     resp.status(400).json({ message: 'errror', error });
//   }
// };
// export const postUser = async (req, resp) => {
//   try {
//     let connection = await Connection();
//     let postData = await connection.updateOne(
//       { newId: req.body.newId },
//       { $set: { name: req.body.name, age: req.body.age } }
//     );
//     resp.status(200).json({ message: 'data updated', data: postData });
//   } catch (error) {
//     resp.status(400).json({ message: 'errror', error });
//   }
// };
