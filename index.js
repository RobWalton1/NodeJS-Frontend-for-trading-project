const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');
//Navigate to localhost:3000 to view the project
const port = 3000;
// Set the view engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

//routes
app.get('/', (req, res) => {
    res.render('index');
});

//Ensures that the server can access the website being hosted locally
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
