/**
 * Modules dependencies
 */
const axios = require('axios');

/**
 * Service interface
 */
class Service {
  static getDataService() {
    return new Promise((resolve, reject) => {
      resolve(axios.get('http://www.mocky.io/v2/5c6c3a92320000e83bbef971'));
    });
  }
}

/**
 * Expose Service
 */
module.exports = Service;
