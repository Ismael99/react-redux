import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Paper from '@material-ui/core/Paper'
import MenuItem from '@material-ui/core/MenuItem'
import {findSuggestions} from '../../redux/actions/findSuggestions'

export const Autocomplete = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	const dispatch = useDispatch()
	const suggestions = useSelector(state => state.suggestions.suggestions)
	console.log("Suggestions?: ", suggestions)
	const {onChangeText, onChangeSelection, text} = props
	const handleChange = (e) => {
			const newText = e.target.value
			onChangeText(newText)
			dispatch(findSuggestions(newText))
			if(!isOpen && newText){
				setIsOpen(true)
			}
			else if(isOpen && !newText){
				setIsOpen(false)
			}
	}
	return(
		<div className='flex flex-col px-2 bg-white border-none rounded-md bg-opacity-40'>	
			<div className='flex flex-row'>
				<div className='flex flex-col items-center'>
					<SearchIcon className='my-auto'/>
				</div>
				<InputBase
					placeholder='Search...'
					value={text}
					style={{width: '100%'}}
					onChange={handleChange}
					onBlur={ () => {
						setTimeout(()=>{
								setIsOpen(false)
							}, 100)
						}
					}
					onFocus={()=>{
						if(text){
							setIsOpen(true)
						}
					}}
					onKeyPress={(e)=>{
						if(e.key ==='Enter' && text){
							onChangeSelection(text)
						}
					}}
				/>
			</div>
			{isOpen && 
					<Paper className='absolute mt-8 container-result' square>
						{
							suggestions.map(suggestion => (
								<MenuItem
									key={suggestion.name}
									component='div'
									onClick={()=>{
										onChangeSelection(suggestion.name)
										setIsOpen(false)
									}}	
								>
									{suggestion.name}
								</MenuItem>
							))
						}
					</Paper>
			}
		</div>
	)
}
