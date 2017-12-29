import { render } from 'react-dom'

import { Provider } from 'react-redux'
import {createBrowserHistory} from "history"
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './router'
import configureStore from './store'

const browserHistory = createBrowserHistory()
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

render(
	<Provider store={store}>
		<Router routes={routes()} history={history}/>
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



