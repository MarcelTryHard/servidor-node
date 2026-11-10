import express, { type Request, type Response } from 'express';

const app: express.Application = express();
const port = 5500;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello There...!!!');
})

app.listen(port, () => {
    console.log('Server is running on', port);
})

