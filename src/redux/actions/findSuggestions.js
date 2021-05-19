import axios from 'axios'
export const FIND_SUGGESTIONS = 'FIND_SUGGESTIONS'
export const findSuggestions = (findText) => async (dispatch, getState) => {
	const includeString = (value) => {
		return(
			typeof value === 'string' ? value.includes(findText) : false
		)
	}
	try{
		let suggestions = []
		const results = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
		results.data.results.forEach(suggestion=>{
			//let isInclude = Object.values(suggestion).some(includeString)
			let isInclude = suggestion.name.includes(findText)
			if(isInclude){
				suggestions.push(suggestion)
			}
		})

		dispatch({
			type: FIND_SUGGESTIONS,
			payload:{
				suggestions: suggestions
			}
		})
	}catch(err){
		console.log(err)
	}
}

export default findSuggestions
