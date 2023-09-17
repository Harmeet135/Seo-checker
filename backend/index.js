import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import router from '../backend/routes/route.js';

const app = express();
app.use(cors());


app.use(express.json());
app.use(bodyParser.json());

app.use("/user", router)

dotenv.config();

app.get("/", (req ,res) => {
    res.send("Hello from Express");
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
}
);