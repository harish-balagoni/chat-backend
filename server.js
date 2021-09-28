import fetch from 'node-fetch';
import express from "express";
import cors from "cors";
import bodyParser from 'body-parser';
const app = express();

app.use(express());


const port = 8000;

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.listen(
    process.env.PORT || port,
    () => { console.log('server started...') }
);

app.get('/users', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            let responseData = {
                status: 200,
                message: 'Succes',
                users: json
            }
            res.send(JSON.stringify(responseData));
        });

});