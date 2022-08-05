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

Example of incoming payload may look like this:

```js
{
	"data": "01755C03673401046865056A490006651C0079001400077DE704087D070009733F27"
}

```

- Depending on device type selected output may be different but it's usually formed like this:

```js
{
	"battery": 92,
	"temperature": 30.8,
	"humidity": 50.5,
	"activity": 73,
	"illumination": 28,
	"infrared_and_visible": 121,
	"infrared": 20,
	"co2": 1255,
	"tvoc": 7,
	"pressure": 1004.7
}
```
## Environment Variables

| Environment Variables | type | Description |
| --- | --- | --- |
| DEVICE_DECODER | string | Drop down list with all currently supported device type decoders based on which we decode the payloads. |

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
