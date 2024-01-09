---
outline: deep
lastUpdated: true
editLink: true
lang: en-US
---

<script setup lang="ts">
import { StatusCodes } from 'http-status-codes'

type ApiExtraError = {
  message: string
  method?: string
  path?: string
  [key: string]: any
}

const BASE_PATH = 'https://docs.railwayapi.site'

type ApiErrorObject = {
  readonly httpCode: StatusCodes
  readonly type: string
  readonly code: string
  readonly title: string
  readonly description: string
  readonly href: string
  extra: ApiExtraError
}

const ApiErrors = [
  {
    httpCode: StatusCodes.FAILED_DEPENDENCY,
    code: 'ERR-0001',
    type: 'UnDocumentedError',
    title: 'Undocumented error',
    description:
      'Undocumented error has occured. Developers have been notified.',
    href: `${BASE_PATH}/errorcodes#UnDocumentedError`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.TOO_MANY_REQUESTS,
    code: 'ERR-0002',
    type: 'TooManyReqeust',
    title: 'Too many request',
    description:
      'Too many request. Check Ratelimit-Reset header for reset rate limit time or contact developer.',
    href: `${BASE_PATH}/errorcodes#TooManyReqeust`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.NOT_FOUND,
    code: 'ERR-0003',
    type: 'NotFound',
    title: 'Resource not found',
    description: 'No resource found for given parameters.',
    href: `${BASE_PATH}/errorcodes#NotFound`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.NOT_FOUND,
    code: 'ERR-0004',
    type: 'RouteNotExist',
    title: 'Route does not exist',
    description: 'Route does not exist.',
    href: `${BASE_PATH}/errorcodes#RouteNotExist`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.UNAUTHORIZED,
    code: 'ERR-0005',
    type: 'Unauthorized',
    title: 'Unauthorized',
    description: 'User not authorized. Check if the API key correct.',
    href: `${BASE_PATH}/errorcodes#Unauthorized`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.FORBIDDEN,
    code: 'ERR-0006',
    type: 'Forbidden',
    title: 'Forbidden',
    description: 'User does not have previlage for this method/route.',
    href: `${BASE_PATH}/errorcodes#Forbidden`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.IM_A_TEAPOT,
    code: 'ERR-0007',
    type: 'IAmATeapot',
    title: 'IAmATeapot',
    description:
      'The server refuses to brew coffee because it is, permanently, a teapot.',
    href: `${BASE_PATH}/errorcodes#IAmATeapot`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.INTERNAL_SERVER_ERROR,
    code: 'ERR-0008',
    type: 'InternalServerError',
    title: 'Internal Server Error',
    description: 'Internal server occured. Developers have been notified.',
    href: `${BASE_PATH}/errorcodes#InternalServerError`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0009',
    type: 'BadRequest',
    title: 'Bad Request',
    description: 'Generic bad request. Check documentation for current route.',
    href: `${BASE_PATH}/errorcodes#BadRequest`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0010',
    type: 'QueryParameterUnspecified',
    title: 'Query parameter unspecified',
    description:
      'One or more query parameter is unspecified. See current route docs for more details.',
    href: `${BASE_PATH}/errorcodes#QueryStringUnspecified`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0011',
    type: 'UrlParameterUnspecified',
    title: 'Url parameter undpecified',
    description:
      'Url parameter is unspecified. See current route docs for more details.',
    href: `${BASE_PATH}/errorcodes#UrlParameterUnspecified`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0012',
    type: 'ReqBodyInvalid',
    title: 'Request body invalid',
    description:
      'Some properties in request body is unspecified. Check message for more information.',
    href: `${BASE_PATH}/errorcodes#ReqBodyInvalid`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.NO_CONTENT,
    code: 'ERR-0013',
    type: 'NoContent',
    title: 'No content',
    description: 'There is no content to send.',
    href: `${BASE_PATH}/errorcodes#NoContent`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.CONFLICT,
    code: 'ERR-0014',
    type: 'Conflict',
    title: 'Conflict',
    description: 'There is an error when creating or updating data.',
    href: `${BASE_PATH}/errorcodes#Conflict`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0015',
    type: 'UnableToUpdate',
    title: 'Unable to update',
    description: 'Cannot update due to some unknown error.',
    href: `${BASE_PATH}/errorcodes#UnableToUpdate`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.BAD_REQUEST,
    code: 'ERR-0016',
    type: 'UnableToDelete',
    title: 'Unable to delete',
    description: 'Delete operation was unsuccessful.',
    href: `${BASE_PATH}/errorcodes#UnableToDelete`,
    extra: {
      message: '',
    },
  },
  {
    httpCode: StatusCodes.IM_A_TEAPOT,
    code: 'ERR-9999',
    type: 'DontCare',
    title: "Don't care error",
    description: 'Developer did not care enough to write better error response',
    href: `${BASE_PATH}/errorcodes#DontCare`,
    extra: {
      message: '',
    },
  },
] as const satisfies ApiErrorObject[]

// export type ApiErrorType = typeof ApiErrors[number]['type']
// export type ApiErrorCode = typeof ApiErrors[number]['code']

import { ref } from 'vue'

const count = ref(0)

</script>

# Error Codes

<div v-for="(error, index) in ApiErrors" :key="index">

<h2 tabindex="-1" :id="error.type">{{error.title}} <a class="header-anchor" :href="`#${error.type}`" aria-hidden="true"></a></h2>

- Code: `{{error.code}}`
- HttpCode: `{{error.httpCode}}`
- Type: `{{error.type}}`

  {{error.description}}

</div>

<style scoped>
.highlight {
  background-color: blueviolet;
}
</style>
