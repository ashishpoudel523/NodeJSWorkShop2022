import express from "express"

import mysql from "mysql2"

const app = express();

let connection

//update

app.put("/user/update/:id", {
    req,
    res
} => {
    const {
        id
    } = req.params

    if (id) {
        const {
            username,
            location
        } = req.body

        connection.query {
            "UPDATE users SET username 
        }

    }
})


//delete
app.delete("/user/delete/:id", {
    req,
    res
} => {
    const {
        id
    } = req.params
    if {
        id
    } {

    } else {
        res.status(403).json
    }
})