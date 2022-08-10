/**
 * Payload Decoder for The Things Network
 *
 * Copyright 2021 Milesight IoT
 *
 * @product UC51x Series
 */
function Decode(port, bytes) {
  var decoded = {}

  for (var i = 0; i < bytes.length; ) {
    var channel_id = bytes[i++]
    var channel_type = bytes[i++]

    // BATTERY
    if (channel_id === 0x01 && channel_type === 0x75) {
      decoded.battery = bytes[i]
      i += 1
    }
    // VALVE 1
    else if (channel_id === 0x03 && channel_type == 0x01) {
      decoded.valve1 = bytes[i] === 0 ? 'off' : 'on'
      i += 1
    }
    // VALVE 2
    else if (channel_id === 0x05 && channel_type == 0x01) {
      decoded.valve2 = bytes[i] === 0 ? 'off' : 'on'
      i += 1
    }
    // VALVE 1 Pulse
    else if (channel_id === 0x04 && channel_type === 0xc8) {
      decoded.valve1_pulse = readUInt32LE(bytes.slice(i, i + 4))
      i += 4
    }
    // VALVE 2 Pulse
    else if (channel_id === 0x06 && channel_type === 0xc8) {
      decoded.valve2_pulse = readUInt32LE(bytes.slice(i, i + 4))
      i += 4
    } else {
      break
    }
  }

  return decoded
}

/* ******************************************
 * bytes to number
 ********************************************/
function readUInt32LE(bytes) {
  var value = (bytes[3] << 24) + (bytes[2] << 16) + (bytes[1] << 8) + bytes[0]
  return value & 0xffffffff
}

function readInt32LE(bytes) {
  var ref = readUInt32LE(bytes)
  return ref > 0x7fffffff ? ref - 0x100000000 : ref
}

module.exports = {
  Decode,
}
