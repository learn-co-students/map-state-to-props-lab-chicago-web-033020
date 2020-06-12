import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <h3>List of Users</h3>
        <ul>
          {this.props.users.map(user => <li>{user.username}</li>)}
        </ul>
        <p>Total # of users: {this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)