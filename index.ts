import express from 'express';
import cors from 'cors'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.use(cors());


app.get('/users', async (req, res) => {
    const allUsers = await prisma.user.findMany();
    res.json(allUsers);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
