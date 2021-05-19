import {createStore, applyMiddleware ,combineReducers, compose} from 'redux'
import thunk from 'redux-thunk'
import results from './reducers/results'
import suggestions from './reducers/suggestions'
import currentItem from './reducers/currentItem'
const reducer = combineReducers({
	results, 
	suggestions, 
	currentItem
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default function generateStore(){
	const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
	return store
}
