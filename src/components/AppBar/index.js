import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import {Autocomplete} from '../Autocomplete'
import { connect } from 'react-redux'
const AppBarPage = () => {
	const [text, setText] = useState("")
	const onChangeText = (txt) => {
		setText(txt)
	}
	const onChangeSelection = () =>{

	}
	return(
		<AppBar className='flex flex-row w-screen'>
			<Toolbar className='flex justify-between w-screen'>
				<Typography variant='h6' color='inherit'>
					Programax 
				</Typography>
				<Autocomplete
					className='bg-red-300'
					text={text}
					onChangeText={onChangeText}
					onChangeSelection={onChangeSelection}
				/>
				<AccountCircle/>
			</Toolbar>
		</AppBar>
	)
}
const mapStateToProps = (state) => {
	return{
		suggestions:state.suggestions,
	}
}
export default connect(mapStateToProps)(AppBarPage)
