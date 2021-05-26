const axios = require('axios');
const express = require('express');
const router = express.Router();

const apiURL = 'http://trautocomplete.azurewebsites.net/api';

router.get('/autocomplete', async (req, res) => {
  const { name } = req.query;

  if (!name) {
    res
      .status(500)
      .send({ errorMessage: 'Missing query param: "name"' });
  };

  const url = `${apiURL}/Autocomplete/GetAutocomplete`;

  const results = await axios
    .get(url, {
      params: {
        name,
      },
    })
    .then(res => res.data);

  res.send({ results });
});

router.get('/', (req, res) => {
  res.send('Server Homepage');
});

module.exports = router;
