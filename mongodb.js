// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// Destructuring above statements
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser:true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log("Unable to connect to database")
    }
    const db = client.db(databaseName)
    // ================================================================================
    //                             DELETE OPERATIONS
    // ================================================================================
    // db.collection('tasks').deleteOne({
    //     description: 'Completed Notes App'
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('users').deleteMany({
    //     age: 20
    // }).then((result) => {
    //     console.log(result)
    // }).then((error) => {
    //     console.log(error)
    // })
    // ===============================================================================
    //                              UPDATE OPERATIONS 
    // ===============================================================================
    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("5ebcd12d584ec21338241e7b")
    // }, {
    //     // $set: {
    //     //     name: "Priyanshu Srivastava"
    //     // }
    //     $inc: {
    //         age: 1
    //     }
    // })
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // Alternate syntax
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5ebcd12d584ec21338241e7b")
    // }, {
    //     $set: {
    //         name: "Priyanshu Srivastava"
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // ==============================================================================
    //                             READ OPERATIONS
    // ==============================================================================
    // db.collection('tasks').findOne({ _id: new ObjectID("5ebcd73c35da0e321ce15767") }, (error, tasks) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(tasks)
    // })
    // db.collection('tasks').find({ completed: false }).toArray((error, task) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(task)
    // })
    // db.collection('users').findOne({ _id: new ObjectID("5ebcdad5dda8680a9407d7a0") }, (error, user) => {
    //     if (error) {
    //         return console.log("Unable to fetch")
    //     }
    //     console.log(user)
    // })
    // db.collection('users').find({ age: 20 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 20 }).count((error, count) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(count)
    // })
    // =============================================================================
    //                             CREATE OPERATIONS 
    // =============================================================================
    // db.collection('users').insertOne({
    //     name: "Priyanshu Srivastava",
    //     age:19
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'Nikhil Saini',
    //         age: 20
    //     },
    //     {
    //         name: 'Vasu dev Sall',
    //         age: 20
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Completed web server',
    //         completed: true
    //     },
    //     {
    //         description: 'Completed Task app',
    //         completed: false
    //     },
    //     {
    //         description: 'Completed Notes App',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert tasks")
    //     }
    //     console.log(result.ops)
    // })
})