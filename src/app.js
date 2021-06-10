import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

const App = ({ routes }) => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, key) => (
          <Route
            key={key}
            exact={!!route.exact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default App
