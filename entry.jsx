import React,{Component} from 'react'
import ReactDom from 'react-dom'
import ErrorBoundary from './ErrorBoundary.jsx'
import { HashRouter as Router, Route,Switch } from 'react-router-dom'
import App from './App.jsx'
import Rejister from './Rejister.jsx'
import Login from './Login.jsx'
import Detail from '@/components/Detail.jsx'
import Kind from '@/components/Kind.jsx'

import './main.scss'
import store from '@/store/index.js'
function show(){
	ReactDom.render(
		<ErrorBoundary>
			<Router>
				<Switch>
					<Route path='/register' component={Rejister}/>
					<Route path='/login' component={Login}/>
					<Route path='/kind/:classID' component={Kind}/>
					<Route path='/detail/:goodsID' component={Detail}/>
					<Route path='/' component={App}/>
				</Switch>
				
			</Router>
		</ErrorBoundary>,
		document.getElementById('root')
	)
}
show();
store.subscribe(show)
