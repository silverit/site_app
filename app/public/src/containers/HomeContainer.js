
import React, {Component} from 'react'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router'
// import { bindActionCreators } from 'redux'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
      return (
        <div>Welcome To Home Page</div>
      )
    }
}
// HomeContainer.contextTypes = {
//   confirmSwal: React.PropTypes.object
// }
const mapStateToProps = state => ({
})

// const mapDispatchToProps = dispatch => ({
//     registerActions: bindActionCreators(registerActions, dispatch),
//     groupActions: bindActionCreators(groupActions, dispatch),
//     accountActions: bindActionCreators(accountActions, dispatch),
//     commonActions: bindActionCreators(commonActions, dispatch)
// })

export default connect(mapStateToProps)(HomeContainer);
