---
outline: deep
lastUpdated: true
editLink: true
lang: en-US
basePath: api.railwayapi.site
prev: true
---

# GET /stations

    Base path: {{$frontmatter.basePath}}

## Summary

Get list of stations for given query string

## URL

`/api/v1/stations?q={queryStiring}&limit={limit}`

## Request Query Parameters:

| Parameters | Required?                       | Description                        |
| ---------- | ------------------------------- | ---------------------------------- |
| q          | (required)                      | query string to find like stations |
| limit      | (optional, default=10, max=100) | limit number of stations           |

## Usage Example:

    {{$frontmatter.basePath}}/api/v1/stations?q=ki
    {{$frontmatter.basePath}}/api/v1/stations?q=k&limit=50

## Possible errors

- [NotFound](../errorcodes#NotFound) : No station found for given queryString
- [QueryParameterUnspecified](../errorcodes#QueryParameterUnspecified) : Query
  string is not specified

## Response

    On success, 200
    On not found, 404
    On bad request, 400

## Response Body

List of stations

## Sample response

```json
{
  "data": [
    {
      "id": 1868,
      "stationCode": "KI",
      "stationName": "Kondapalli"
    },
    {
      "id": 2296,
      "stationCode": "KIN",
      "stationName": "Kapasan"
    },
    {
      "id": 1893,
      "stationCode": "KIM",
      "stationName": "Kim"
    },
    {
      "id": 222,
      "stationCode": "KIT",
      "stationName": "Khallikot"
    },
    {
      "id": 1424,
      "stationCode": "KID",
      "stationName": "Khairar Junction"
    },
    {
      "id": 329,
      "stationCode": "KIUL",
      "stationName": "Kiul Junction"
    },
    {
      "id": 2797,
      "stationCode": "KITA",
      "stationName": "Kita"
    },
    {
      "id": 549,
      "stationCode": "KIR",
      "stationName": "Katihar Junction"
    },
    {
      "id": 2132,
      "stationCode": "KIP",
      "stationName": "Khalilpur"
    },
    {
      "id": 2503,
      "stationCode": "KIS",
      "stationName": "Kapilas Road Junction"
    }
  ]
}
```
