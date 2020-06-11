import React, { Component } from 'react';
import { connect } from "react-redux"
class Users extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          UserNames: {this.props.users.map(user=> <li>{user.username}</li>)}
          <br/>
          {/* In addition, display the total number of users currently in the store */}
          Number of Users: {this.props.users.length}
        </ul>
      </div>
    )
  }
}

const mapStateToProps= (state) => {
  return {users: state.users, userCount: state.users.length}
}


export default connect(mapStateToProps)(Users)
