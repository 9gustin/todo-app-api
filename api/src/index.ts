import dotenv from 'dotenv';
import app from './utils/app';
import dbConnect from './utils/dbConnect';

dotenv.config();

dbConnect();
app.start();