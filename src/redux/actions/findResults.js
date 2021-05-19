import axios from 'axios'
export const FIND_RESULTS = 'FIND_RESULTS'

const findResults = () => async (dispatch, getState) => {
	try{
		const results = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
		console.log(results)
		dispatch({
			type: FIND_RESULTS,
			payload: {
				objects: results.data.results
			},
		})
	}catch(err){
		console.log(err)
	}
}

export default findResults
