const express = require('express');
const appRoute = require('./app/server');

const router = express();
const port = 3000;

router.get('/', appRoute);

router.listen(port, () => console.log(`Example app listening on port ${port}!`));
