import React from 'react'
import {Provider} from 'react-redux'
import{BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Results from './components/Results'
import {Details} from './components/Details'
import store from './redux/store'
export const App=()=>{
	return(
		<Provider store={store}>	
			<BrowserRouter>
					<Switch>
						<Route path='/results' component={Results}/>		
						<Route path='/details/:itemId'component={Details}/>	
						<Redirect from='/' to='/results'/>
						<Route/>		
					</Switch>
			</BrowserRouter>
		</Provider>
	)
}
