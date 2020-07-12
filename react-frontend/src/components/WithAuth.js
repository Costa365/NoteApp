// withAuth.jsx
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserService from './UserService';

export default function WithAuth(ComponentToProtect, props) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false
      };
      this.userService = new UserService();

      this.compProps = props;
    }
    
    componentDidMount() {
      this.userService.isAuth(res => {
        if (res === null) {
          this.setState({ loading: false, redirect: true});
        } 
        else {
          this.setState({ loading: false, redirect: false});
        }
      });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      return redirect ? <Redirect to="/" /> : <ComponentToProtect {...this.props} {...this.compProps} />;
    }
  }
}