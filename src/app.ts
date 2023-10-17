import express, { Application } from 'express';
import config from 'config';
import cors from 'cors';
import routes from './routes';
import connect from './utils/connect'; 
import logger from './utils/logger';

const app: Application = express();
const PORT = config.get<number>("port");

connect();

const corsOptions = {
    origin: config.get<string>("origin")
};
  
app.use(cors(corsOptions));

app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
