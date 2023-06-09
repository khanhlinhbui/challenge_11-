const express = require('express'); //library class
const path = require('path'); // library 

const app = express(); // creating the object. 
const PORT = 3001; // door for server 

app.use(express.static('public')); // allow express.js the ability to use static file ( images, CSS)
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html') ))
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname,'public/notes.html'))) // link index.html and notes.html
app.post('/api/notes', (req, res) => console.log('12345'))
app.listen(PORT, () => console.log('hihi') // express will set up server and listen to any requests and responses
);
