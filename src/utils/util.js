const { EGRESS_URLS } = require('../config/config')
const fetch = require('node-fetch')

const send = async result => {
  if (EGRESS_URLS) {
    const eUrls = EGRESS_URLS.replace(/ /g, '')
    const urls = eUrls.split(',')
    urls.forEach(async url => {
      if (url) {
        try {
          const callRes = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(result),
          })
          if (!callRes.ok) {
            console.error(`Error passing response data to ${url}, status: ${callRes.status}`)
          }
        } catch (e) {
          console.error(`Error making request to: ${url}, error: ${e.message}`)
        }
      }
    })
  } else {
    console.error('EGRESS_URLS is not provided.')
  }
}

const hexToBytes = hexString => {
  if (hexString.length % 2 !== 0) {
    throw 'Must have an even number of hex digits to convert to bytes'
  } /* w w w.  jav  a2 s .  c o  m*/
  var numBytes = hexString.length / 2
  var byteArray = new Uint8Array(numBytes)
  for (var i = 0; i < numBytes; i++) {
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16)
  }
  return byteArray
}

const getPropertyValue = (prop, data, defVal) => {
  if (typeof defVal === 'undefined') defVal = null
  prop = prop.split('.')
  for (let i = 0; i < prop.length; i++) {
    if (typeof data[prop[i]] === 'undefined') return defVal
    data = data[prop[i]]
  }
  return data
}

module.exports = {
  send,
  hexToBytes,
  getPropertyValue,
}
