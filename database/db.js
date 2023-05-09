import { MongoClient } from 'mongodb';
let con = new MongoClient('mongodb://0.0.0.0:27017');

export const connection = async () => {
  try {
    let connect = await con.connect();
    let dbConnect = await connect.db('pu');
    let collection = await dbConnect.collection('cls');
    return collection;
  } catch (error) {
    console.log('not connected to database');
  }
};
export default connection;

// import { MongoClient } from 'mongodb';
// let con = new MongoClient('mongodb://0.0.0.0:27017');

// const Connection = async () => {
//   try {
//     let connect = await con.connect();
//     let dbconnect = await connect.db('student');
//     let collection = await dbconnect.collection('users');
//     return collection;
//   } catch (error) {
//     console.log('not connecting to the data base');
//   }
// };
// export default Connection;
