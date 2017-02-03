const Programme = require('../models/programme');

function programmesIndex(req, res) {
  Programme.find((err, programmes) => {
    if(err) return res.status(500).json({ error: err });
    return res.json(programmes);
  });
}

function programmesCreate(req, res) {
  Programme.create(req.body, (err, programme) => {
    if(err) return res.status(400).json({ error: err });
    return res.json(programme);
  });
}

function programmesShow(req, res) {
  Programme.findById(req.params.id, (err, programme) => {
    if(err) return res.status(500).json({ error: err });
    if(!programme) return res.status(404).json({ error: 'Not found' });
    return res.json(programme);
  });
}

function programmesUpdate(req, res) {
  Programme.findById(req.params.id, (err, programme) => {
    if(err) return res.status(500).json({ error: err });
    if(!programme) return res.status(404).json({ error: 'Not found' });

    for(const key in req.body) {
      programme[key] = req.body[key];
    }

    programme.save((err, programme) => {
      if(err) return res.status(400).json({ error: err });
      res.json(programme);
    });
  });
}

function programmesDelete(req, res) {
  Programme.findById(req.params.id, (err, programme) => {
    if(err) return res.status(500).json({ error: err });
    if(!programme) return res.status(404).json({ error: 'Not found' });

    programme.remove(err => {
      if(err) return res.status(500).json({ error: err });
      res.status(204).send();
    });
  });
}

module.exports = {
  index: programmesIndex,
  create: programmesCreate,
  show: programmesShow,
  update: programmesUpdate,
  delete: programmesDelete
};
