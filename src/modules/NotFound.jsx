import React from 'react'

const NotFound = ({ status }) => (
  <Route
    render={
      ({ staticContext }) => {
        if (staticContext) staticContext.status = status
        return <div>This route has not been found Soz!</div>
      }}
  />
)

export default NotFound
