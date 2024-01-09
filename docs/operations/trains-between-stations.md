---
outline: deep
lastUpdated: true
editLink: true
lang: en-US
basePath: api.railwayapi.site
prev: true
---

# GET /trainsBtwStations

    Base path: {{$frontmatter.basePath}}

## Summary

Get trains between stations

## URL

`/api/v1/trainsBtwStations?fromStation={fromStationCode}&toStation={toStationCode}&allTrains={true/false}`

## Request Query Parameters:

| Parameters  | Required?               | Description                                                     |
| ----------- | ----------------------- | --------------------------------------------------------------- |
| fromStation | required                | Train running from stationCode                                  |
| toStation   | required                | Train running to stationCode                                    |
| allTrains   | optional, default=false | include local train and some not currently running trains also. |

## Usage Example:

    {{$frontmatter.basePath}}/api/v1/trainsBtwStations?fromStation=GWL&toStation=HWH
    {{$frontmatter.basePath}}/api/v1/trainsBtwStations?fromStation=GWL&toStation=HWH&allTrains=true

## Possible errors

- [NotFound](../errorcodes#NotFound) : No trains found between given stations
- [QueryParameterUnspecified](../errorcodes#QueryParameterUnspecified) : Some
  query parameters are not provided or not stations matched give query
  parameters

## Response

    On success, 200
    On not found, 404
    On bad request, 400

## Response Body

List of trains running between given station and list of station info

## Sample response

```json
{
  "data": [
    {
      "id": 564,
      "trainNumber": "12176",
      "trainName": "CHAMBAL EXPRESS",
      "trainFullName": "Gwalior - Howrah Chambal Express",
      "trainRunsOn": {
        "sunday": false,
        "monday": false,
        "tueday": true,
        "wednesday": false,
        "thursday": false,
        "friday": false,
        "saturday": true
      },
      "availableClasses": [
        "2A",
        "3A",
        "SL",
        "GN"
      ],
      "boardingDisabled": false,
      "hasPantry": false,
      "trainType": "SF",
      "returnTrainNumber": "12175",
      "stationFrom": {
        "id": 736,
        "srNo": 1,
        "arrivalTime": null,
        "departureTime": "07:40:00",
        "haltTime": null,
        "platform": "1",
        "dayCount": 1,
        "distance": "0.0",
        "speed": "0.0",
        "boardingDisabled": 0,
        "updatedAt": "2023-03-24T12:00:43.000Z",
        "stationCode": "GWL",
        "stationName": "Gwalior Junction"
      },
      "stationTo": {
        "id": 1,
        "srNo": 30,
        "arrivalTime": "06:55:00",
        "departureTime": null,
        "haltTime": null,
        "platform": "12,14",
        "dayCount": 2,
        "distance": "1286.2",
        "speed": "62.8",
        "boardingDisabled": 0,
        "updatedAt": "2023-03-24T12:00:43.000Z",
        "stationCode": "HWH",
        "stationName": "Howrah Junction"
      },
      "updatedAt": "2023-03-24T12:00:42.000Z",
      "distance": 1286,
      "duration": "23h 15m"
    },
    {
      "id": 566,
      "trainNumber": "12178",
      "trainName": "CHAMBAL EXPRESS",
      "trainFullName": "Mathura - Howrah Chambal Express",
      "trainRunsOn": {
        "sunday": false,
        "monday": true,
        "tueday": false,
        "wednesday": false,
        "thursday": false,
        "friday": false,
        "saturday": false
      },
      "availableClasses": [
        "2A",
        "3A",
        "SL",
        "GN"
      ],
      "boardingDisabled": false,
      "hasPantry": false,
      "trainType": "SF",
      "returnTrainNumber": "12177",
      "stationFrom": {
        "id": 736,
        "srNo": 5,
        "arrivalTime": "07:35:00",
        "departureTime": "07:40:00",
        "haltTime": "00:05:00",
        "platform": "1",
        "dayCount": 1,
        "distance": "171.9",
        "speed": "50.3",
        "boardingDisabled": 0,
        "updatedAt": "2023-03-24T12:00:43.000Z",
        "stationCode": "GWL",
        "stationName": "Gwalior Junction"
      },
      "stationTo": {
        "id": 1,
        "srNo": 34,
        "arrivalTime": "06:55:00",
        "departureTime": null,
        "haltTime": null,
        "platform": "12,14",
        "dayCount": 2,
        "distance": "1458.2",
        "speed": "62.8",
        "boardingDisabled": 0,
        "updatedAt": "2023-03-24T12:00:43.000Z",
        "stationCode": "HWH",
        "stationName": "Howrah Junction"
      },
      "updatedAt": "2023-03-24T12:00:42.000Z",
      "distance": 1286,
      "duration": "23h 15m"
    },
    {
      "id": 2691,
      "trainNumber": "20976",
      "trainName": "CHAMBAL EXP",
      "trainFullName": "Agra Cantt. - Howrah Chambal Express",
      "trainRunsOn": {
        "sunday": false,
        "monday": false,
        "tueday": false,
        "wednesday": false,
        "thursday": true,
        "friday": false,
        "saturday": false
      },
      "availableClasses": [
        "2A",
        "3A",
        "SL",
        "GN"
      ],
      "boardingDisabled": false,
      "hasPantry": false,
      "trainType": "SF",
      "returnTrainNumber": "20975",
      "stationFrom": {
        "id": 736,
        "srNo": 4,
        "arrivalTime": "07:35:00",
        "departureTime": "07:40:00",
        "haltTime": "00:05:00",
        "platform": "1",
        "dayCount": 1,
        "distance": "118.2",
        "speed": "50.5",
        "boardingDisabled": 0,
        "updatedAt": "2023-03-24T12:00:43.000Z",
        "stationCode": "GWL",
        "stationName": "Gwalior Junction"
      },
      "stationTo": {
        "id": 1,
        "srNo": 33,
        "arrivalTime": "06:55:00",
        "departureTime": null,
        "haltTime": null,
        "platform": "12,14",
        "dayCount": 2,
        "distance": "1404.4",
        "speed": "62.8",
        "boardingDisabled": 0,
        "updatedAt": "2023-03-24T12:00:43.000Z",
        "stationCode": "HWH",
        "stationName": "Howrah Junction"
      },
      "updatedAt": "2023-03-24T12:00:42.000Z",
      "distance": 1286,
      "duration": "23h 15m"
    }
  ],
  "extra": {
    "stationsInfo": [
      {
        "id": 736,
        "stationCode": "GWL",
        "stationName": "Gwalior Junction",
        "stateName": "Madhya Pradesh",
        "zoneCode": "NCR",
        "stationType": "Junction",
        "hindiStationName": "ग्वालियर जंक्शन"
      },
      {
        "id": 1,
        "stationCode": "HWH",
        "stationName": "Howrah Junction",
        "stateName": "West Bengal",
        "zoneCode": "ER",
        "stationType": "Terminus",
        "hindiStationName": "हावड़ा जंक्शन"
      }
    ]
  }
}
```
