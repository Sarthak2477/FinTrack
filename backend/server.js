import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import Transaction from './model/transaction.model.js';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(cors());

// OR enable for specific origin
app.use(cors({ origin: "https://fintrack-pm3vwew0x-sarthaks-projects-69798058.vercel.app/" }));

app.use(express.json());

app.listen(5000, () => {
    connectDB();
    console.log('Server is running');
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});


app.post('/api/transactions', async (req, res) => {
    try {
        const { userId, amount, description, date, category } = req.body;
        console.log(req.body);
        if (!userId || !amount || !description || !date || !category) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const transaction = new Transaction({
            userId,
            amount,
            description,
            date,
            category,
        });

        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.get('/api/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});
