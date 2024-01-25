const express = require('express')
const todoRoutes = require("./routes/todo.routes")
const app = express()
const mongodb = require("./mongodb/mongodb.connect")

mongodb.connect();

app.use(express.json());

app.use((error, req, res, next) => {
    res.status(500).json({message: error.message});
});

app.use("/todos", todoRoutes);

app.get('/', (req, res) => {
    res.send('Express test')
    })

 //app.listen(3015, () => {
// console.log('server is running on http://localhost:3015/')
 //})

module.exports = app