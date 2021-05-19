import {FIND_RESULTS} from '../actions/findResults'
import {FIND_SUGGESTIONS} from '../actions/findSuggestions'

const defaultState = {
	objects: [],
	suggestions: []
}

const reducer = (state = defaultState, action) =>{
	switch(action.type){	
		case FIND_SUGGESTIONS: 
			return{
				...state,
				suggestions: action.payload.suggestions
			}
		case FIND_RESULTS:
			return{
				...state,
				objects: action.payload.objects
			}

		default:
			return state
	}
}

export default reducer
