const validator = require('validator');

function isValidUrl(url) {
  return validator.isURL(url, {
    require_protocol: false,  // Allow "www.google.be" without http/https
    require_valid_protocol: true, // If protocol exists, it must be http/https
    require_tld: true,       // Require a valid TLD like .com, .be, etc.
  });
};


module.exports = { isValidUrl };

