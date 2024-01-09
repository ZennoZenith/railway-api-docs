---
outline: deep
lastUpdated: true
editLink: true
lang: en-US
basePath: api.railwayapi.site
prev: true
---

# GET /schedules/\{trainNumbers}

    Base path: {{$frontmatter.basePath}}

## Summary

Get schedule for given train numbers(s)

## URL

`/api/v1/trains/{trainNumbers}?fullSchedule=false`

## Request URL Parameters:

| Parameters   | Required? | Description                              |
| ------------ | --------- | ---------------------------------------- |
| trainNumbers | required  | one or more train number seperate by ',' |

_Note: Maximum train number limit is 10._

## Request Query Parameters:

| Parameters   | Required?                 | Description                                                                                                                |
| ------------ | ------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| fullSchedule | (optional, default=false) | include intermediate stations also. Will be applied to all train if multiple train numbers are given in request parameters |

## Usage Example:

    {{$frontmatter.basePath}}/api/v1/schedules/12650
    {{$frontmatter.basePath}}/api/v1/schedules/12650?fullSchedule=true
    {{$frontmatter.basePath}}/api/v1/schedules/12649,12650

## Possible errors

- [NotFound](../errorcodes#NotFound) : No schedule found for given trainNumber

## Response

    On success, 200
    On not found, 404

## Response Body

List of schedules

## Sample response

```json
{
  "data": [
    {
      "id": 980,
      "trainNumber": "12650",
      "trainName": "YPR SAMPARK KRT",
      "schedule": [
        {
          "srNo": "1",
          "stationId": 744,
          "stationName": "Hazrat Nizamuddin",
          "stationCode": "NZM",
          "arrivalTime": null,
          "departureTime": "08:20",
          "distance": "0.0",
          "haltTime": null,
          "dayCount": 1,
          "platform": "7",
          "boardingDisabled": false,
          "speed": "0.0"
        },
        {
          "srNo": "2",
          "stationId": 736,
          "stationName": "Gwalior Junction",
          "stationCode": "GWL",
          "arrivalTime": "11:43",
          "departureTime": "11:45",
          "distance": "305.9",
          "haltTime": "00:02",
          "dayCount": 1,
          "platform": "1",
          "boardingDisabled": false,
          "speed": "90.4"
        },
        {
          "srNo": "3",
          "stationId": 473,
          "stationName": "Virangana Lakshmibai Jhansi Junction",
          "stationCode": "VGLB",
          "arrivalTime": "13:01",
          "departureTime": "13:09",
          "distance": "403.4",
          "haltTime": "00:08",
          "dayCount": 1,
          "platform": "2",
          "boardingDisabled": false,
          "speed": "77.0"
        },
        {
          "srNo": "4",
          "stationId": 12,
          "stationName": "Bhopal Junction",
          "stationCode": "BPL",
          "arrivalTime": "16:55",
          "departureTime": "17:05",
          "distance": "695.2",
          "haltTime": "00:10",
          "dayCount": 1,
          "platform": "1",
          "boardingDisabled": false,
          "speed": "77.5"
        },
        {
          "srNo": "5",
          "stationId": 18,
          "stationName": "Nagpur Junction",
          "stationCode": "NGP",
          "arrivalTime": "22:55",
          "departureTime": "23:00",
          "distance": "1085.5",
          "haltTime": "00:05",
          "dayCount": 1,
          "platform": "2",
          "boardingDisabled": false,
          "speed": "66.9"
        },
        {
          "srNo": "6",
          "stationId": 22,
          "stationName": "Balharshah Junction",
          "stationCode": "BPQ",
          "arrivalTime": "02:25",
          "departureTime": "02:30",
          "distance": "1294.0",
          "haltTime": "00:05",
          "dayCount": 2,
          "platform": "1",
          "boardingDisabled": false,
          "speed": "61.0"
        },
        {
          "srNo": "7",
          "stationId": 840,
          "stationName": "Kacheguda",
          "stationCode": "KCG",
          "arrivalTime": "08:20",
          "departureTime": "08:30",
          "distance": "1666.8",
          "haltTime": "00:10",
          "dayCount": 2,
          "platform": "2",
          "boardingDisabled": false,
          "speed": "63.9"
        },
        {
          "srNo": "8",
          "stationId": 837,
          "stationName": "Kurnool City",
          "stationCode": "KRNT",
          "arrivalTime": "12:29",
          "departureTime": "12:30",
          "distance": "1903.2",
          "haltTime": "00:01",
          "dayCount": 2,
          "platform": "2",
          "boardingDisabled": false,
          "speed": "59.3"
        },
        {
          "srNo": "9",
          "stationId": 141,
          "stationName": "Guntakal Junction",
          "stationCode": "GTL",
          "arrivalTime": "15:20",
          "departureTime": "15:25",
          "distance": "2025.9",
          "haltTime": "00:05",
          "dayCount": 2,
          "platform": null,
          "boardingDisabled": false,
          "speed": "43.3"
        },
        {
          "srNo": "10",
          "stationId": 501,
          "stationName": "Ballari Junction",
          "stationCode": "BAY",
          "arrivalTime": "16:30",
          "departureTime": "16:35",
          "distance": "2075.9",
          "haltTime": "00:05",
          "dayCount": 2,
          "platform": "1",
          "boardingDisabled": false,
          "speed": "46.2"
        },
        {
          "srNo": "11",
          "stationId": 502,
          "stationName": "Hosapete Junction",
          "stationCode": "HPT",
          "arrivalTime": "17:35",
          "departureTime": "17:40",
          "distance": "2140.8",
          "haltTime": "00:05",
          "dayCount": 2,
          "platform": "1",
          "boardingDisabled": false,
          "speed": "64.9"
        },
        {
          "srNo": "12",
          "stationId": 511,
          "stationName": "Koppal",
          "stationCode": "KBL",
          "arrivalTime": "18:14",
          "departureTime": "18:16",
          "distance": "2168.6",
          "haltTime": "00:02",
          "dayCount": 2,
          "platform": null,
          "boardingDisabled": false,
          "speed": "49.1"
        },
        {
          "srNo": "13",
          "stationId": 503,
          "stationName": "Gadag Junction",
          "stationCode": "GDG",
          "arrivalTime": "19:00",
          "departureTime": "19:02",
          "distance": "2226.0",
          "haltTime": "00:02",
          "dayCount": 2,
          "platform": null,
          "boardingDisabled": false,
          "speed": "78.3"
        },
        {
          "srNo": "14",
          "stationId": 289,
          "stationName": "SSS Hubballi Junction",
          "stationCode": "UBL",
          "arrivalTime": "20:35",
          "departureTime": "20:45",
          "distance": "2283.6",
          "haltTime": "00:10",
          "dayCount": 2,
          "platform": null,
          "boardingDisabled": false,
          "speed": "37.2"
        },
        {
          "srNo": "15",
          "stationId": 288,
          "stationName": "SMM Haveri",
          "stationCode": "HVR",
          "arrivalTime": "21:58",
          "departureTime": "22:00",
          "distance": "2358.8",
          "haltTime": "00:02",
          "dayCount": 2,
          "platform": null,
          "boardingDisabled": false,
          "speed": "61.8"
        },
        {
          "srNo": "16",
          "stationId": 285,
          "stationName": "Davangere",
          "stationCode": "DVG",
          "arrivalTime": "23:13",
          "departureTime": "23:15",
          "distance": "2427.4",
          "haltTime": "00:02",
          "dayCount": 2,
          "platform": null,
          "boardingDisabled": false,
          "speed": "56.4"
        },
        {
          "srNo": "17",
          "stationId": 283,
          "stationName": "Arsikere Junction",
          "stationCode": "ASK",
          "arrivalTime": "01:15",
          "departureTime": "01:20",
          "distance": "2587.6",
          "haltTime": "00:05",
          "dayCount": 3,
          "platform": null,
          "boardingDisabled": false,
          "speed": "80.1"
        },
        {
          "srNo": "18",
          "stationId": 281,
          "stationName": "Tumakuru",
          "stationCode": "TK",
          "arrivalTime": "03:24",
          "departureTime": "03:25",
          "distance": "2683.9",
          "haltTime": "00:01",
          "dayCount": 3,
          "platform": null,
          "boardingDisabled": false,
          "speed": "46.6"
        },
        {
          "srNo": "19",
          "stationId": 993,
          "stationName": "Yesvantpur Junction",
          "stationCode": "YPR",
          "arrivalTime": "04:30",
          "departureTime": null,
          "distance": "2747.7",
          "haltTime": null,
          "dayCount": 3,
          "platform": "4",
          "boardingDisabled": false,
          "speed": "58.9"
        }
      ]
    }
  ]
}
```
