import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => user.username)}
          {this.props.users.length/* In addition, display the total number of users curently in the store */}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  debugger;
  return {
    users: state.users
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
