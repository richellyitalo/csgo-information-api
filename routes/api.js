var express = require('express');
var router = express.Router();
var https = require('https');
var axios = require('axios');
/* GET users listing. */

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

router.get('/teams:query?', async function (req, res, next) {
  try {
    const response = await axios.get(`${API_URL}teams`, {
      params: req.query,
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
      },
    });
    res.setHeader('x-total', response.headers['x-total']);
    res.set('x-total', response.headers['x-total']);
    res.set('test', 'oi');
    res.set('Content-Type', 'application/json');
    res.header('oi', 'oi');
    res.send(response.data);
  } catch (error) {
    res.status(error.response.status);
    res.send(error.response.statusText);
    // res.status(401);
    // res.send('Error on request');
  }
});

module.exports = router;
