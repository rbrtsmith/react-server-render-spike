import koa from 'koa'
import React from 'react'
import reactrouter from 'koa-react-router'
import serve from 'koa-static'

import App from './App'
import Container from './renderContainer'


const app = new koa()
const PORT = 3000

app.use(serve('.'))

app.use(reactrouter({
  App,
  onError: (ctx, err) => console.error('I have failed', err),
  onRedirect: (ctx, redirect) => console.info('I have redirected…'),
  onRender: (ctx) => ({
    containerRenderer: Container
  })
}))

app.listen(PORT, () => console.info(`Listening on port ${PORT}`))
