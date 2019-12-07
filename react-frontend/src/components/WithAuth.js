// withAuth.jsx
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserService from './UserService';

export default function WithAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
      this.userService = new UserService();
    }
    componentDidMount() {
      this.userService.isAuth(res => {
        if (res === null) {
          this.setState({ loading: false, redirect: true});
        } else {
          this.setState({ loading: false, redirect: false});
        }
      });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return <ComponentToProtect {...this.props} />;
    }
  }
}