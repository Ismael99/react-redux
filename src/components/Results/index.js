import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import findResults from '../../redux/actions/findResults'
import findSuggestions from '../../redux/actions/findSuggestions'

export const Results = (props) => {
	const dispatch = useDispatch()
	const pokemones = useSelector(store => store.suggestions.objects)
	console.log("Results: ", pokemones)
	return(
		<>
			<div className='flex flex-col items-center justify-center w-screen h-screen'>
				<button className='px-2 bg-blue-300 border-transparent rounded-md hover:opacity-60' onClick={()=>dispatch(findResults())}>Fetch</button>
				<lu>
					{
						pokemones.map(pokemon => (
							<li key={pokemon.name}>{pokemon.name}</li>
						))
					}
				</lu>
			</div>
		</>
	)
}

