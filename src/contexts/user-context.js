import React, { Component, createContext } from 'react'

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    userName: 'TestUser',
    userType: 'admin',
    userId: 1,
    friends: [{username: 'cereal', userId: 10}, {username: 'before', userId: 11}, {username: 'milk', userId: 12}, {username: 'always', userId: 13}],
    pending: [{username: 'boom', userId: 14}, {username: 'bang', userId: 15}, {username: 'kapow', userId: 16}],
    requested: [{username: 'mickey', userId: 17}]
  }

  setUserName = (newUserName) => {
    this.setState({ userName: newUserName})
  }

  render() {
    return(
      <UserContext.Provider value={{...this.state, setUserName:this.setUserName}}>
        {this.props.children}
      </UserContext.Provider>
    );
  }

}

export default UserContextProvider