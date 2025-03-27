import express from 'express';
import mainRouter from '@routes/mainRouter';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/v1', mainRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 
