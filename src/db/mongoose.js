const mongoose = require('mongoose')
// const validator = require('validator')

var url = process.env.DATABASEURL || "mongodb://127.0.0.1:27017/task-manager-api"

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})







