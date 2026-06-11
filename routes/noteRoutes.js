const express = require('express');
const router = express.Router();

const noteController = require('../controllers/noteController');
const verifyJWT = require('../middleware/verifyJWT');


console.log("verifyJWT =", verifyJWT);
console.log("type =", typeof verifyJWT);
router.use(verifyJWT);

router.get('/', noteController.getAllNotes);

router.post('/', noteController.createNote);

router.put('/:id', noteController.updateNote);

router.delete('/:id', noteController.deleteNote);

module.exports = router;