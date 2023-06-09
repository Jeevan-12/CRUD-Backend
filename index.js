import express from 'express';
import cors from 'cors';
import connection from './database/db.js';
import Routes from './routes/route.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 8000;
let app = express();
app.use(cors());
app.use(express.json());
app.use('/', Routes);
connection();
app.listen(PORT, console.log('data base is running'));

// import express from 'express';
// let app = express();
// import cors from 'cors';
// import Connection from './database/db.js';
// import Routes from './routes/route.js';
// app.use(cors());
// app.use(express.json());
// console.log('fourth');
// app.use('/', Routes);
// Connection();
// app.listen(8000, console.log('back end is running'));
