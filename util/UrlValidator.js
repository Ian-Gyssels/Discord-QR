const validator = require('validator');

function isValidUrl(url) {
  return validator.isURL(url, {
    require_protocol: false,
    require_valid_protocol: true, 
    require_tld: true,  
  });
};


module.exports = { isValidUrl };

