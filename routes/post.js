var express = require('express');
var router = express.Router();
var object = require('../modules/objectsAndTypes');
var crypto = require('crypto');

router.get('/:id', passport.authenticate('bearer', { session: false }), (req, res, next) => {
  object.get('Post', req.params.id, 1)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

router.post('/save', passport.authenticate('bearer', { session: false }), (req, res, next) => {
  object.save(['texto', 'file'], values, 'Post')
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

router.put('/save/:id', passport.authenticate('bearer', { session: false }), (req, res, next) => {
  let values = req.query;
  values.id = req.params.id;

  object.update(['texto', 'file'], values, 'Post')
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

router.delete('/delete/:id', passport.authenticate('bearer', { session: false }), (req, res, next) => {
  object.delete('Post', req.params.id)
    .then(response => {
      res.json({ status: true, content: response });
    })
    .catch(response => {
      res.json({ status: false, content: response });
    });
});

module.exports = router;