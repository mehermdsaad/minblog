import express from 'express'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(join(__dirname, '/../public')));

// LISTEN SERVER 
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
