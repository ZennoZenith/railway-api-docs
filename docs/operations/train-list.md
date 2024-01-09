---
outline: deep
lastUpdated: true
editLink: true
lang: en-US
basePath: api.railwayapi.site/
prev: true
---

# GET /trains

    Base path: {{$frontmatter.basePath}}

## Summary

Get list of trains for given query string

## URL

`/api/v1/trains?q={queryStiring}&limit={limit}`

## Request Query Parameters:

| Parameters | Required?                     | Description                            |
| ---------- | ----------------------------- | -------------------------------------- |
| q          | required                      | query string to find like train number |
| limit      | optional, default=10, max=100 | limit number of trains                 |

## Usage Example:

    {{$frontmatter.basePath}}/api/v1/trains?q=126
    {{$frontmatter.basePath}}/api/v1/trains?q=12&limit=50

## Possible errors

- [NotFound](../errorcodes#NotFound) : No trains found for given queryString
- [QueryParameterUnspecified](../errorcodes#QueryParameterUnspecified) : Query
  string is not specified

## Response

    On success, 200
    On not found, 404
    On bad request, 400

## Response Body

List of trains

## Sample response

```json
{
  "data": [
    {
      "id": 939,
      "trainNumber": "12609",
      "trainName": "MYSURU EXPRESS"
    },
    {
      "id": 938,
      "trainNumber": "12608",
      "trainName": "LALBAGH EXP"
    },
    {
      "id": 940,
      "trainNumber": "12610",
      "trainName": "CHENNAI EXPRESS"
    },
    {
      "id": 931,
      "trainNumber": "12601",
      "trainName": "MAS MAQ MAIL"
    },
    {
      "id": 932,
      "trainNumber": "12602",
      "trainName": "MAQ CHENNAIMAIL"
    }
  ]
}
```
