const express = require('express');
const router = express.Router();
const URLparse = require('../engine/URLPaser');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/url/parse', (req, res, next) => {
  // enter in validation
  // const urlR = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)           (?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
  // const url= content.match(urlR);
  let filename = '';
  if(req.query.url_field) {
    let link = new URLparse(req.query.url_field);
    filename = link.file.clean();
  }
  res.render('URLparse', {
    title: 'URL Parser',
    url: req.query.url_field,
    urlFilename: filename
  });
})

module.exports = router;
