import { Route, IndexRoute } from 'react-router'
import MainContainer from './src/containers/MainContainer'
import HomeContainer from './src/containers/HomeContainer'
import AccountContainer from './src/containers/AccountContainer'

export default function routes(){
  console.log(MainContainer)
  console.log(HomeContainer)
  console.log(AccountContainer)
	return(
	  <Route path="/" component={MainContainer}>
      <IndexRoute component={HomeContainer}/>
      <Route path="account" title='Quản lý tài khoản' component={AccountContainer}/>
    </Route>
	)
}
 // <IndexRoute components={{
 //        content: HomeContainer
 //      }}  />
      
 //      <Route path='account' title='Quản lý tài khoản' components={{
 //        content: AccountContainer
 //      }} />