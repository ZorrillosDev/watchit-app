// eslint-disable-next-line
import React from 'react'
import ReactDOM from 'react-dom'
import App from './core/app/index'
import { Broker as broker } from '@main/bridge'
import * as Bootstrap from '@main/core'

import 'normalize.css'
import './index.web.scss'
// import registerServiceWorker from './swRegister'

const webRenderer = broker.getIPC()
Bootstrap(webRenderer, 'web') // Initialize nodes and core libs

const root = document.getElementById('root')
ReactDOM.render(<App />, root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// registerServiceWorker()
