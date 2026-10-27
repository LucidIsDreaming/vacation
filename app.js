import express from 'express';

const app = express(); 

const PORT = 3008;

app.use(express.urlencoded({extended: true}));

const orders = [];

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.sendFile(`${import.meta.dirname}/views/vacation.html`)

})

app.listen(PORT, () => {

    console.log(`Server is running at http://localhost:${PORT}`);

})