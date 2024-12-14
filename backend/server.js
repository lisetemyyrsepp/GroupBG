const express = require('express');
const path = require('path'); // For handling file paths // LISATUD
const app = express();

// listen for requests on port 3000
app.listen(3000);

/* app.get() is used to respond to Get requests, and it takes two arguments: 
1- arg1: represents what path/url you want to listen to (e.g., '/' listens to index path)
2- arg2: represents a function that takes in request and response objects */

app.get('/', (req, res) => {
    // res.send can be used to send text and HTML snippets
    //res.send('</h1>First HTML response message! </h1>');

    /* res.sendFile() is a method that can be used to send files as its name indicates
    However, it takes the absolute not the relative path to the file. Therefore, you need to specify what is the root directory.
    To avoid this confusion, you can use  "__dirname"*/
    res.sendFile('./views/index.html', { root: __dirname });
    console.log(__dirname);
});

// do not write in the URL address bar the extension of the page. For example, writing (http://localhost:3000/posts.html) will direct you to the 404 page
app.get('/posts', (req, res) => {
    res.sendFile('./views/posts.html', { root: __dirname });
});



// We will discuss this method next week, when we speak about Middlewares
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});


/*
const express = require('express');
const path = require('path'); // For handling file paths
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Serve the index.html file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Serve the posts.html file for the /posts route
app.get('/posts', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'posts.html'));
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});*/