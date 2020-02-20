import {createStore, combineReducers} from 'redux'
import languagesReducer from './reducers/languagesReducer'

const mainReducer = combineReducers({
    'languagesReducer':languagesReducer
})


const store = createStore(mainReducer)

export default store