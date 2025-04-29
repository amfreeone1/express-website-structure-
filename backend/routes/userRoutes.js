const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('İstifadəçi marşrutu işləyir!');
});

module.exports = router;

