---
outline: deep
lastUpdated: true
editLink: true
lang: en-US
basePath: api.railwayapi.site
prev: true
---

# Miscellaneous

## GET /states

    Base path: {{$frontmatter.basePath}}

### Summary

Get states

### URL

    `/api/v1/states?q={queryString}`
    `/api/v1/states/all` (will give all states)

### Request Query Parameters:

| Parameters | Required? | Description                  |
| ---------- | --------- | ---------------------------- |
| q          | required  | find states like queryString |

### Usage Example:

    {{$frontmatter.basePath}}/api/v1/states?q=pradesh
    {{$frontmatter.basePath}}/api/v1/states/all

### Possible errors

- [NotFound](../errorcodes#NotFound) : No state found for given queryString

### Response

    On success, 200
    On not found, 404

### Response Body

List of states

### Sample response

```json
{
  "data": [
    {
      "stateName": "Andhra Pradesh"
    },
    {
      "stateName": "Arunachal Pradesh"
    },
    {
      "stateName": "Himachal Pradesh"
    },
    {
      "stateName": "Madhya Pradesh"
    },
    {
      "stateName": "Uttar Pradesh"
    }
  ]
}
```

## GET /zones

    Base path: {{$frontmatter.basePath}}

### Summary

Get zones

### URL

    `/api/v1/zones?q={queryString}`
    `/api/v1/zones/all` (will give all zones)

### Request Query Parameters:

| Parameters | Required? | Description                 |
| ---------- | --------- | --------------------------- |
| q          | required  | find zones like queryString |

### Usage Example:

    {{$frontmatter.basePath}}/api/v1/zones?q=north
    {{$frontmatter.basePath}}/api/v1/zones/all

### Possible errors

- [NotFound](../errorcodes#NotFound) : No zone found for given queryString

### Response

    On success, 200
    On not found, 404

### Response Body

List of zones

### Sample response

```json
{
  "data": [
    {
      "zoneName": "North Central Railway",
      "zoneCode": "NCR"
    },
    {
      "zoneName": "North Eastern Railway",
      "zoneCode": "NER"
    },
    {
      "zoneName": "North Western Railway",
      "zoneCode": "NWR"
    },
    {
      "zoneName": "Northeast Frontier Railway",
      "zoneCode": "NFR"
    },
    {
      "zoneName": "Northern Railway",
      "zoneCode": "NR"
    }
  ]
}
```

## GET /trainTypes

    Base path: {{$frontmatter.basePath}}

### Summary

Get states

### URL

    `/api/v1/trainTypes?q={queryString}`
    `/api/v1/trainTypes/all` (will give all train types)

### Request Query Parameters:

| Parameters | Required? | Description                      |
| ---------- | --------- | -------------------------------- |
| q          | required  | find train type like queryString |

### Usage Example:

    {{$frontmatter.basePath}}/api/v1/trainType?q=exp
    {{$frontmatter.basePath}}/api/v1/trainType/all

### Possible errors

- [NotFound](../errorcodes#NotFound) : No train type found for given queryString

### Response

    On success, 200
    On not found, 404

### Response Body

List of train types

### Sample response

```json
{
  "data": [
    {
      "trainTypeCode": "EXP",
      "trainTypeName": "Mail/Express"
    }
  ]
}
```
