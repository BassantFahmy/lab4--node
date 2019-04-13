var express = require('express');
var router = express.Router();
const createError = require('http-errors');
const msgmodel = require('./../Model/msg');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


// router.get('/listing', async (req, res, next) => {
//   const msgs = await msgmodel.find({}).exec();
//   res.send(msgs)
// });
router.get('/listById/:Id', (req, res, next) => {
  msgmodel
    .findById(req.params.Id)
    .then(m => res.send(m))
    .catch(err => next(createError(404, err.message)));
})


router.get('/listing', function (req, res, next) {
  msgmodel.find((err, msgs) => {
    res.send(msgs)
  })
});


router.get('/createMsg', (req, res) => {
  res.send('createMsg')
})


router.post('/createMsg', (req, res, next) => {
  const newmsg = new msgmodel(req.body)
  newmsg
    .save()
    .then(msgmodel => res.send(msgmodel))
    .catch(err => next(cerr(400, err.message)));
});

router.patch('/:Id', (req, res, next) => {
  msgmodel
    .findByIdAndUpdate(req.params.Id, req.body, { new: true })
    .then(msg => res.send(msg))
    .catch(err => next(createError(400, err.message)))
});

router.delete('/:Id', (req, res, next) => {
  msgmodel
    .findByIdAndDelete(req.params.Id)
    .then(msg => res.send(msg))
    .catch(err => next(createError(400, err.message)))
});



module.exports = router;
