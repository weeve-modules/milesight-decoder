# Milesight Decoder

|           |                                                                                           |
| --------- | ----------------------------------------------------------------------------------------- |
| Name      | Milesight Decoder                                                                         |
| Version   | v1.0.0                                                                                    |
| DockerHub | [weevenetwork/milesight-decoder](https://hub.docker.com/r/weevenetwork/milesight-decoder) |
| Authors   | Mesud Pasic                                                                               |

- [Milesight Decoder](#milesight-decoder)
  - [Description](#description)
  - [Features](#features)
  - [Environment Variables](#environment-variables)
    - [Module Specific](#module-specific)
    - [Set by the weeve Agent on the edge-node](#set-by-the-weeve-agent-on-the-edge-node)
  - [Dependencies](#dependencies)

## Description

Milesite Decoder decodes payloads for Milesight IoT sensors in ttn or chirpstack based platform. Payload depends on sensor type and platform. Based on decoder functions https://github.com/Milesight-IoT/SensorDecoders

- Depending on environment variables NESTED_RESPONSE & CUSTOM_FIELDS out can be nestd with few fields or with all fields in "data" property, for example:
- - when nested without custom fields

```js
{
  timestamp: '1647945089527',
  devEUI: '70b3d52dd3003e30',
  deviceName: '70B3D52DD3003E30',
  data: {
    reason: 1,
    targetTemperature: 0,
    sensorTemperature: 12.8515625,
    relativeHumidity: 0.78125,
    motorRange: 3587,
    motorPosition: 3903,
    batteryVoltage: 2,
    openWindow: false,
    childLock: true,
    highMotorConsumption: true,
    lowMotorConsumption: true,
    brokenSensor: true
  }
}
```

- - when nested with custom fields

```js
{
  timestamp: '1647945089527',
  devEUI: '70b3d52dd3003e30',
  deviceName: '70B3D52DD3003E30',
  data: {
    targetTemperature: 0,
  }
}
```

- - when not nested without custom fields

```js
{
  timestamp: '1647945089527',
  devEUI: '70b3d52dd3003e30',
  deviceName: '70B3D52DD3003E30',
  reason: 1,
  targetTemperature: 0,
  sensorTemperature: 12.8515625,
  relativeHumidity: 0.78125,
  motorRange: 3587,
  motorPosition: 3903,
  batteryVoltage: 2,
  openWindow: false,
  childLock: true,
  highMotorConsumption: true,
  lowMotorConsumption: true,
  brokenSensor: true
}
```

- - when nested without custom fields

```js
{
  timestamp: '1647945089527',
  devEUI: '70b3d52dd3003e30',
  deviceName: '70B3D52DD3003E30',
  data: {
    reason: 1,
    targetTemperature: 0,
    sensorTemperature: 12.8515625,
    relativeHumidity: 0.78125,
    motorRange: 3587,
    motorPosition: 3903,
    batteryVoltage: 2,
    openWindow: false,
    childLock: true,
    highMotorConsumption: true,
    lowMotorConsumption: true,
    brokenSensor: true
  }
}
```

- - when nested with custom fields

```js
{
  timestamp: '1647945089527',
  devEUI: '70b3d52dd3003e30',
  deviceName: '70B3D52DD3003E30',
  data: {
    targetTemperature: 0,
  }
}
```

## Environment Variables

| Environment Variables | type | Description |
| --- | --- | --- |
| NESTED_RESPONSE | string | yes/no enum type, determines if sensor "date" property will be passed in data property or if properties will be extracted as single items and passed with rest of the payload |
| CUSTOM_FIELDS | string | comma separated names of fields that user wants to pass to next module, if ommited, all fields from "data" property will be passed |

### Module Specific

### Set by the weeve Agent on the edge-node

| Environment Variables | type   | Description                                    |
| --------------------- | ------ | ---------------------------------------------- |
| MODULE_NAME           | string | Name of the module                             |
| MODULE_TYPE           | string | Type of the module (Input, Processing, Output) |
| INGRESS_HOST          | string | Host where app is running                      |
| INGRESS_PORT          | string | Port where app is running                      |
| EGRESS_URLS           | string | HTTP ReST endpoint for the next module         |

## Dependencies

```js
"dependencies": {
    "body-parser": "^1.19.2",
    "express": "^4.17.3",
    "express-winston": "^4.2.0",
    "node-fetch": "^2.6.1",
    "winston": "^3.6.0"
}
```
