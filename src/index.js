import 'antd/dist/antd.css'
import './styles/global.scss'

import React from 'react'
import ReactDOM from 'react-dom'

import getRoutes from './routes'

import './index.css'
import App from './App'

const routes = getRoutes()

ReactDOM.render(
  <App routes={routes} />,
  document.getElementById('root'),
)
