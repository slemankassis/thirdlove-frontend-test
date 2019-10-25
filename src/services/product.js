const axios = require('axios');

const get = async () => axios.get('http://www.mocky.io/v2/5c6c3a92320000e83bbef971');

module.exports = {
  get,
};
