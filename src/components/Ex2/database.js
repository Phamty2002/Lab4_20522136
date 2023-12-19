import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCards.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://admin:your_password@cluster0.lgjcl.mongodb.net/datingDB?retryWrites=true&w=majority';

// Middleware
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});
