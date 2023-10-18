const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

console.log('environment    ', process.env.ENVIRONMENT)
console.log('PORT    ', process.env.PORT)
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING)
if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}


//const taskController = require('./controller/task.controller')



const app = express();
const port = process.env.PORT || 3080;

//app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello !!");
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})