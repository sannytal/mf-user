import React from 'react';
import UserDetails from './UserDetails';

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: false,
      user: null,
    };
  }

  render() {

    return <UserDetails />;
  }
}

export default User;
