const Note = require('../models/Note');

const getAllNotes = async (req, res) => {

    const notes = await Note.find({
        user: req.user
    });

    res.json(notes);
};

const createNote = async (req, res) => {

    const { title, content } = req.body;

    const note = await Note.create({
        title,
        content,
        user: req.user
    });

    res.status(201).json(note);
};

const updateNote = async (req, res) => {

    const note = await Note.findById(req.params.id);

    if (!note) {
        return res.status(404).json({
            message: 'Note not found'
        });
    }

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;

    await note.save();

    res.json(note);
};

const deleteNote = async (req, res) => {

    const note = await Note.findById(req.params.id);

    if (!note) {
        return res.status(404).json({
            message: 'Note not found'
        });
    }

    await note.deleteOne();

    res.json({
        message: 'Note deleted'
    });
};

module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
};