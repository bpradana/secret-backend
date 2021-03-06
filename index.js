const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 3000;
require('dotenv/config');

app.use(bodyParser.json());

// Home Page
app.get('/', (req, res) => {
    res.send('Hi!');
});

// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB!')
})

// Listening
app.listen(PORT, () => console.log(`App running on port ${PORT}`));