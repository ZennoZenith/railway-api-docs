---
outline: deep
lastUpdated: true
editLink: true
lang: en-US
basePath: api.railwayapi.site
prev: true
---

# GET /trains/\{trainNumbers}

    Base path: {{$frontmatter.basePath}}

## Summary

Get train info for given train numbers(s)

## URL

`/api/v1/trains/{trainNumbers}`

## Request URL Parameters:

| Parameters   | Required? | Description                              |
| ------------ | --------- | ---------------------------------------- |
| trainNumbers | required  | one or more train number seperate by ',' |

_Note: Maximum train number limit is 10._

## Usage Example:

    {{$frontmatter.basePath}}/api/v1/trains/12650
    {{$frontmatter.basePath}}/api/v1/trains/12649,12650

## Possible errors

- [NotFound](../errorcodes#NotFound) : No trains found for given trainNumbers

## Response

    On success, 200
    On not found, 404

## Response Body

List of trains

## Sample response

```json
{
  "data": [
    {
      "id": 980,
      "trainNumber": "12650",
      "trainName": "YPR SAMPARK KRT",
      "trainFullName": "Karnataka Sampark Kranti Express (Via Ballari) (PT)",
      "departureTime": "08:20",
      "arrivalTime": "04:30",
      "duration": "44:10",
      "trainRunsOn": {
        "sunday": true,
        "monday": true,
        "tueday": true,
        "wednesday": false,
        "thursday": true,
        "friday": false,
        "saturday": true
      },
      "numberOfStops": 19,
      "trainTypeCode": "SKR",
      "distance": 2748,
      "availableClasses": [
        "1A",
        "2A",
        "3A",
        "SL",
        "GN"
      ],
      "avgSpeed": 59,
      "hasPantry": true,
      "returnTrainNumber": "12649",
      "updatedAt": "2023-03-24 17:30:42",
      "stationFrom": {
        "id": 744,
        "stationCode": "NZM",
        "stationName": "Hazrat Nizamuddin"
      },
      "stationTo": {
        "id": 993,
        "stationCode": "YPR",
        "stationName": "Yesvantpur Junction"
      }
    }
  ]
}
```
