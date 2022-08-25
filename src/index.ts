import express, { Express, Request, Response } from 'express';
import bodyParser from 'body-parser';
import swaggerUI from 'swagger-ui-express';
import { swaggerDocument  } from './swagger/swagger.js';

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.get('/healthcheck', (req: Request, res: Response) => 
{
    res.send('Service is Up');
});

app.listen(PORT, () => console.log(`Running on ${ PORT }`));