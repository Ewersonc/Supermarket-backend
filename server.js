import dotenv from 'dotenv';
import express from 'express';
import userRouter from './src/routers/user-router.js';
import productRouter from './src/routers/product-router.js';
import mongoose from 'mongoose';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors()); 
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/supermarket-system-ads')
  .then(() => console.log("MongoDB conectado"))
  .catch(err => console.log("Erro ao conectar:", err));


app.use('/api/user', userRouter);


import mid from './src/authMiddleware.js';
app.use(mid);


app.use('/api/product', productRouter);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});
