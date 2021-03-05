const app = require('express')();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hi!');
});

// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

app.listen(PORT, () => console.log(`app running on port ${PORT}`));