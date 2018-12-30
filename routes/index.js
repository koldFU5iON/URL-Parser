const express = require('express');
const router = express.Router();
const URLparse = require('../engine/URLPaser');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/url/parse', (req, res, next) => {

  try {
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
  }
  catch(err) {
    res.render('URLparse', {
      title: 'URL Parser',
      url: req.query.url_field,
      urlFilename: 'Not a valid address'
    })
  }

})

module.exports = router;
