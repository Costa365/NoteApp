// withAuth.jsx
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import UserService from './UserService';

export default function WithAuth(ComponentToProtect, isAuth=true) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
      this.userService = new UserService();
      this.isAuth = isAuth;
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
      
      if (redirect && this.isAuth) {
        return <Redirect to="/" />;
      }
      else {
        return <ComponentToProtect {...this.props} />;
      }
      
      /*
      if(this.isAuth){
        if (redirect) {
          return <Redirect to="/" />;
        }
        return <ComponentToProtect {...this.props} />;
      }
      else{
        if (redirect) {
          return <ComponentToProtect {...this.props} />;
        }
        return <Redirect to="/" />;
      }*/
    }
  }
}