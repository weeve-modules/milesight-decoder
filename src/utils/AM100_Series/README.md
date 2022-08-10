# Ambience Monitoring Sensors - Milesight IoT

![AM103](AM103.png) ![AM104](AM107.png)

The payload decoder function is applicable to AM103, AM103L, AM104 (AM100) and AM107(AM102).

For more detailed information, please visit [milesight official website](https://www.milesight-iot.com).

## Payload Definition

```
--------------------- Payload Definition ---------------------

                   [channel_id] [channel_type] [channel_value]
01: battery      -> 0x01         0x75          [1byte ] Unit: %
03: temperature  -> 0x03         0x67          [2bytes] Unit: °C (℉)
04: humidity     -> 0x04         0x68          [1byte ] Unit: %RH
05: activity     -> 0x05         0x6A          [2bytes] Unit:
06: illumination -> 0x06         0x65          [6bytes] Unit: lux
07: CO2          -> 0x07         0x7D          [2bytes] Unit: ppm
08: tVOC         -> 0x08         0x7D          [2bytes] Unit: ppb
09: pressure     -> 0x09         0x73          [2bytes] Unit: hPa

```

## Example for The Things Network

**Payload**

```
01 75 5C 03 67 34 01 04 68 65 05 6A 49 00 06 65 1C 00 79 00 14 00 07 7D E7 04 08 7D 07 00 09 73 3F 27
```

**Data Segmentation**

- `01 75 5C`
- `03 67 34 01`
- `04 68 65`
- `05 6A 49 00`
- `06 65 1C 00 79 00 14 00`
- `07 7D E7 04`
- `08 7D 07 00`
- `09 73 3F 27`

**Output**

```json
{
  "battery": 92,
  "temperature": 30.8,
  "humidity": 50.5,
  "activity": 73,
  "illumination": 28,
  "infrared": 20,
  "infrared_and_visible": 121,
  "co2": 1255,
  "tvoc": 7,
  "pressure": 1004.7
}
```
