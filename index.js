const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const ReportRouter = require('./routes/Report');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Heloo Browsrere')
})
app.use('/reports', ReportRouter);
const PORT = 5000;
const URL = 'mongodb+srv://Prateek:Prateek123@cluster0.uwl72.mongodb.net/GRAMODAY?retryWrites=true&w=majority'

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => {
        console.log(`Server Running on Port:${PORT}`)
    }))
    .catch((error) => {
        console.log(error);
    })