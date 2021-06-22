const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
require('dotenv/config');

app.use(bodyParser.json());
app.use(cors())

// Home Page
app.get('/', (req, res) => {
    res.send('Hi!');
});

// Import Routes
const postsRoute = require('./routes/posts');
app.options('/posts', function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.end();
  });
app.use('/posts', postsRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB!')
})

// Listening
app.listen(PORT, () => console.log(`App running on port ${PORT}`));