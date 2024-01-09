---
outline: deep
lastUpdated: true
editLink: true
lang: en-US
basePath: api.railwayapi.site
prev: true
---

# GET /stations/\{stationCodes}

    Base path: {{$frontmatter.basePath}}

## Summary

Get station info for given station code(s)

## URL

`/api/v1/stations/{stationCodes}`

## Request URL Parameters:

| Parameters   | Required? | Description                             |
| ------------ | --------- | --------------------------------------- |
| stationCodes | required  | one or more stationCode seperate by ',' |

_Note: Maximum station codes limit is 10._

## Usage Example:

    {{$frontmatter.basePath}}/api/v1/stations/KIR
    {{$frontmatter.basePath}}/api/v1/stations/KIR,NZM

## Possible errors

- [NotFound](../errorcodes#NotFound) : No station found for given `stationCodes`

## Response

    On success, 200
    On not found, 404

## Response Body

List of station info

## Sample response

```json
{
  "data": [
    {
      "id": 549,
      "stationCode": "KIR",
      "stationName": "Katihar Junction",
      "stateName": "Bihar",
      "stationType": "Junction",
      "numberOfPlatforms": 9,
      "hindiStationName": "कटिहार जंक्शन",
      "updatedAt": "2023-03-24 17:30:42",
      "zone": {
        "zoneName": "Northeast Frontier Railway",
        "zoneCode": "NFR"
      }
    }
  ]
}
```
