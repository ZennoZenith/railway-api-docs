---
outline: deep
lastUpdated: true
editLink: true
lang: en-US
---

<script setup lang="ts">

const BASE_PATH = 'https://railway.zennozenith.com'

type ApiErrorObject = {
  readonly heading: string
  readonly httpCode: number
  readonly errorCode: number
  readonly title: string
  readonly description: string
}

const ApiErrors = [
  {
    heading: 'UnExpectedError',
    httpCode: 500,
    errorCode: 1,
    title: 'Unexpected Error',
    description:
      'Unexpected error has occured. Developers have been notified.',
  },
  {
    heading: 'NotFound',
    httpCode: 404,
    errorCode: 2,
    title: 'Not Found',
    description: ''
  },
  {
    heading: 'BadRequest',
    httpCode: 400,
    errorCode: 3,
    title: 'Bad Request',
    description: ''
  },
  {
    heading: 'LimitOutOfRange',
    httpCode: 400,
    errorCode: 4,
    title: 'Limit Out Of Range',
    description: ''
  },
  {
    heading: 'RateLimiting',
    httpCode: 429,
    errorCode: 5,
    title: 'Rate Limiting',
    description: ''
  },
] as const satisfies ApiErrorObject[]

import { ref } from 'vue'

const count = ref(0)

</script>

# Error Codes

<div v-for="(error, index) in ApiErrors" :key="index">

<h2 tabindex="-1" :id="error.heading">{{error.heading}} <a class="header-anchor" :href="`#${error.heading}`" aria-hidden="true"></a></h2>

- Code: `{{error.errorCode}}`
- HttpCode: `{{error.httpCode}}`
- Type: `{{error.title}}`

  {{error.description}}

</div>

<style scoped>
.highlight {
  background-color: blueviolet;
}
</style>
