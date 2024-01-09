---
outline: deep
lastUpdated: true
editLink: true
lang: en-US
prev:
  text: 'Versioning'
  link: '/versioning'
next:
  text: 'GET /trains'
  link: '/operations/train-list'
---

# Operations

The API includes operations for uploading source files, placing orders,
retrieving information about orders and files, and downloading finished
documents (transcripts or captions) or source files for an order.

Below is a summary of each operation, along with a link to a page with detailed
specifications for it.

| Operation                               | HTTP Resource/verb            | Remarks                                                                         |
| --------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------- |
| Get list of trains                      | GET /trains                   | Retruns list of trains with where train number is maching query parameter `{q}` |
| Get train info                          | GET /trains/{trainNumbers}    | Retruns list of train info having train number = `{trainNumbers}`               |
| Get list of stations                    | GET /stations                 | Get list of stations for given query string                                     |
| Get station info                        | GET /stations/{stationCodes}  | Get station info for given station code(s)                                      |
| Get schedule for given train numbers(s) | GET /schedules/{trainNumbers} |                                                                                 |
| Get trains between stations             | GET /trainsBtwStations        |                                                                                 |
| Get list of states                      | GET /states                   |                                                                                 |
| Get all states                          | GET /states/all               |                                                                                 |
| Get list of zones                       | GET /zones                    |                                                                                 |
| Get all zones                           | GET /zones/all                |                                                                                 |
| Get list of train types                 | GET /trainTypes               |                                                                                 |
| Get all train types                     | GET /trainTypes/all           |                                                                                 |
| c                                       |                               |                                                                                 |
