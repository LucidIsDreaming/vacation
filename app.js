import express from 'express';

const app = express(); 

const PORT = 3008;

app.use(express.urlencoded({extended: true}));

const vacations = [];

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.sendFile(`${import.meta.dirname}/views/vacation.html`)

})

app.get('/confirm', (req,res) => {
    res.sendFile(`${import.meta.dirname}/views/confirm.html`)

})

app.post('/find-vacation', (req, res) => {

    const book = req.body;
    book.timestamp = new Date();

    console.log(book);

    vacations.push(book);
    console.log(vacations);

    res.sendFile(`${import.meta.dirname}/views/confirm.html`);
});

app.get('/admin', (req, res) => {

    res.send(vacations);
});

app.listen(PORT, () => {

    console.log(`Server is running at http://localhost:${PORT}`);

})