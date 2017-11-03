import React from 'react'
import buildStore from '../store'

const store = buildStore()
const state = `window.__initialState__ = ${JSON.stringify(store.getState())}`

const Container = (view) => (
  <html lang="en">
    <head>
      <title>Hello Container</title>
      <script dangerouslySetInnerHTML={{ __html: state }} />
    </head>
    <body>
      <div id="app">
        <div dangerouslySetInnerHTML={{ __html: view }} />
        <script src="dist/common.bundle.js" />
        <script src="dist/main.bundle.js" />
      </div>
    </body>
  </html>
)

export default Container;
