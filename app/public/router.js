import { Route, IndexRoute } from 'react-router'
import MainContainer from './src/containers/MainContainer'
import HomeContainer from './src/containers/HomeContainer'
import AccountContainer from './src/containers/AccountContainer'
console.log("load router.js")
export default function routes(){

	return(
	  	<Route path="/" component={MainContainer}>
      		
		</Route>
	)
}
 // <IndexRoute components={{
 //        content: HomeContainer
 //      }}  />
      
 //      <Route path='account' title='Quản lý tài khoản' components={{
 //        content: AccountContainer
 //      }} />
 //      
 //      // 
      // <Route path="account" title='Quản lý tài khoản' component={AccountContainer}/>