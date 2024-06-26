import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './nest/index.js'
import {Provider} from 'react-redux'
import {BrowserRouter as Routeur} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Routeur>
        <App />
      </Routeur>
    </Provider>
  </React.StrictMode>,
)
