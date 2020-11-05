import dotenv from 'dotenv';
dotenv.config();

import app from './utils/app';
import dbConnect from './utils/dbConnect';


dbConnect();
app.start();