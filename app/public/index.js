import { render } from 'react-dom'
import {  IndexRoute } from 'react-router'

import { Provider } from 'react-redux'
import {createBrowserHistory} from "history"
// import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import {Switch, Route, BrowserRouter as Router, HashRouter} from"react-router-dom"
import routes from './router'
import configureStore from './store'

// import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'



import MainContainer from './src/containers/MainContainer'
import HomeContainer from './src/containers/HomeContainer'
import AccountContainer from './src/containers/AccountContainer'
const browserHistory = createBrowserHistory()
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)
console.log("load index.js")
render(
	<Provider store={store}>
		<HashRouter>
			<Switch>
				<Route exact path="/" component={MainContainer}/>
				<Route exact path="/home" component={HomeContainer} />
	            <Route exact path="/account" component={AccountContainer} />							
			</Switch>
		</HashRouter>
	</Provider>,
	document.getElementById("container")
)

// render(
//   <div>"Hello react Dom"</div>,
//   document.getElementById("test")
// )
// import React from 'react'
// import { render } from 'react-dom'
// import Root from './support/containers/Root'
// import configureStore from './support/stores/configureStore'
// import 'whatwg-fetch'
// import { hashHistory } from 'react-router'
// import { useRouterHistory } from 'react-router'
// import { createHistory } from 'history'
// const appHistory = useRouterHistory(createHistory)({ queryKey: false })
// import { syncHistoryWithStore } from 'react-router-redux'
// const store = configureStore();
// const history = syncHistoryWithStore(appHistory, store)
// var _rootPath = window._rootPath || '/'
// render(
//   <Root store={store} history={history} rootPath={_rootPath} />,
//   document.getElementById("root")
// )



