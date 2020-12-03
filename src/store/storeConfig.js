import { createStore, combineReducers } from 'redux'

import paginasReducer from './reducers/paginas'

const reducers = combineReducers({
    paginas: paginasReducer
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig