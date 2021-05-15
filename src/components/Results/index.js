import React from 'react'
import { connect } from 'react-redux'

const Results = (props) => {
	const {results} = props
	console.log(results)
	return(
		<>
			<p>Results</p>
			<p>Dui. Nunc accumsan, quam a fermentum mattis, magna sapien iaculis pede.</p>
		</>
	)
}

const mapStateProps = (state) =>{
	return{
		results: state.results,
	}
}

export default connect(mapStateProps)(Results)
