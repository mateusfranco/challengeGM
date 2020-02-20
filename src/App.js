import React, {Component} from 'react'
import store from './store/store'
import { Provider } from 'react-redux'
import Routes from './routes'

const App = () => (
    <Provider store={store}>
        <Routes></Routes>
    </Provider>
)


export default App
    
