import React from 'react'
import {Provider} from 'react-redux'
import{BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import {Results} from './components/Results'
import {Details} from './components/Details'
import {PageIndex} from './pages/PageIndex'
import generateStore from './redux/store'
export const App=()=>{
	const store = generateStore()
	return(
		<Provider store={store}>	
			<BrowserRouter>
					<Switch>
						<Route exact path='/' component={PageIndex}/>		
						<Route path='/results' component={Results}/>		
						<Route path='/details/:itemId'component={Details}/>	
						<Route/>		
					</Switch>
			</BrowserRouter>
		</Provider>
	)
}
