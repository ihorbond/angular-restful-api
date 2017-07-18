const express = require('express');
const router = express.Router();
const Phone = require ('../models/phone-model');

router.get('/phones', (req, res, next) => {
  Phone.find((err, phonesList) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(phonesList);
  });
});

router.get('/phones/find/:id', (req, res) => {
     const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({message: 'Specified id is not valid' });
    return;
  }

 Phone.findById(id, (err, thePhone) => {
    if (err) {
      res.json(err);
      return;
    }
    res.json(thePhone);
 });

});

router.delete('/phones/delete/:id', (req, res) => {
  const id = req.params.id;
  if(!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({message: "Specified id not valid"});
    return;
  }

  Phone.remove({ _id: req.params.id }, (err) => {
    if(err) {
      res.json(err);
      return;
    }
    return res.json({
      message: 'Phone succesfully removed!'
    });
  });
});

router.post('/phones', (req, res, next) => {
  console.log("POST TRIGGERED");
  const thePhone = new Phone ({
    brand: req.body.brand,
     name: req.body.name,
    specs: req.body.specs,
    image: req.body.image || ''
  });

  thePhone.save(err => {
    if (err) {
      res.json(err);
      return;
    }
    res.json({
      message: 'New Phone Created',
      id: thePhone.id
    });
  });
});

module.exports = router;
