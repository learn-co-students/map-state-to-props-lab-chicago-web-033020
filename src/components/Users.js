import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers = () => {
    return this.props.users.map(user => <li>{user.username}</li>)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          Users!
          <ul>
            {this.renderUsers()}
          </ul>
          <p>{this.props.users.length}</p>
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
