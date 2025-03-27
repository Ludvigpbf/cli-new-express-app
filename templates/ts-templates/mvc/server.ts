import express from 'express';
import mainRouter from './routes/mainRouter';



const app = express(); // Create an express app
const PORT = process.env.PORT || 3000; // Set default port or use environment port

app.get('/api/v1', mainRouter); // Use main router here

// Global Error Handler
app.use((err: any, req: any, res: any, next: any) => {
    console.error(err.message);
    res.status(500).json({ message: 'Internal Server Error' });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 
