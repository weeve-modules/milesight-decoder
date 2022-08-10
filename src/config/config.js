const env = require('../utils/env')

module.exports = {
  EGRESS_URLS: env('EGRESS_URLS', ''),
  INGRESS_HOST: env('INGRESS_HOST', '127.0.0.1'),
  INGRESS_PORT: env('INGRESS_PORT', '8080'),
  MODULE_NAME: env('MODULE_NAME', 'Milesight Decoder'),
  DEVICE_DECODER: env('DEVICE_DECODER', 'AM100_Series\\AM100_Chirpstack'),
  LABEL: env('LABEL', 'data'),
}
