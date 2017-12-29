const actionTypes = {
  TEST: 'account.TEST',
  
}

function test (callback) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.TEST
    })
  }
}

const actions = {
  test
}



export { actions, actionTypes }
