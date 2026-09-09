const express = require("express");
const cors = require('cors');
const noteModel = require("../db/note_model");

const app = express();
app.use(express.json());
app.use(cors());



app.post('/write', async (req, res) => {

    const title = req.body.title;
    const note_body = req.body.note;

    const note = await noteModel.create({
        title: req.body.title,
        note: req.body.note,
    })

    res.status(201).json({
        message: "note created"
    })
})

app.get('/', async(req, res) => {

    const notes = await noteModel.find();

    res.status(200).json({
        message: "notes retrieved",
        notes,
    })

})


module.exports = app;