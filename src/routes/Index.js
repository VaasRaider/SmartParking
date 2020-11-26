const express = require('express');
const router = express.Router();
const Note = require('../models/Note');
router.use(express.json());
router.get ('/', async (req, res)=>{
    //res.sendFile(path.join(__dirname, 'views/Index.html'));
    const notes = await Note.find().lean();
    //res.json(notes);
    res.render('Index', {notes});
});

router.get ('/test_get', async (req, res)=>{
    //res.sendFile(path.join(__dirname, 'views/Index.html'));
    const notes = await Note.find().lean();
    res.json(notes);
    //res.render('Index', {notes});
});

router.post('/hola', async function (req, res) {
  
     const{title, description, user} = req.body;
     const newNote = new Note({title, description, user});
     //res.send(title);
     await newNote.save();
    res.send('[POST]Guardado');
});


router.post('/test_post', async (req, res) => {
    const{title, description, user} = req.body;
     const newNote = new Note({title, description, user});
     await newNote.save();
     res.sendStatus(200);
});

router.get ('/about', (req, res)=>{
    //res.sendFile(path.join(__dirname, 'views/Index.html'));
    res.render('about' );
});

/*
// Cuando inicie la página mandar a Index.html
router.get ('/', (req, res)=>{
    //res.sendFile(path.join(__dirname, 'views/Index.html'));
    res.render('Index.html' );
})

router.get ('/contact', (req, res)=>{
    //res.sendFile(path.join(__dirname, 'views/Index.html'));
    res.render('contact.html' );
})

router.get ('/reservations', (req, res)=>{
    //res.sendFile(path.join(__dirname, 'views/Index.html'));
    res.render('reservations.html' );
})

router.get ('/registers', (req, res)=>{
    //res.sendFile(path.join(__dirname, 'views/Index.html'));
    res.render('registers.html' );
})
*/
module.exports = router;
