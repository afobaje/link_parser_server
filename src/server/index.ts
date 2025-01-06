import express, { Application, urlencoded } from 'express';
import cors, { CorsOptions } from 'cors';
import helmet from 'helmet';
import routes from '../routes/routes';
import bodyParser from 'body-parser';


const corsOptions: CorsOptions = {
    methods: ["PUT", "PATCH", "DELETE", "POST", "GET"],
    exposedHeaders: "Authorization",
    origin: '*',
    optionsSuccessStatus: 200

};

const app: Application = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(routes)


const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

