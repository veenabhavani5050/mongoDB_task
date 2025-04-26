// server related code 
import app from './app.js'; 
import mongoose from 'mongoose';
import { MONGODB_URL } from './utils/config.js';

// env file
// dotenv.config();

// mongoDB data base conection
mongoose.connect(MONGODB_URL)
.then(()=>{
console.log("mongodb successfull connected");
}).catch((err)=>{
console.log(`mongodb connection error ${err.message}`);
})

// server conection
app.listen('3001','127.0.0.1',()=>{
  console.log("the server is running @127.0.0.1");
})


