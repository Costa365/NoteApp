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
        redirect: false
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

      let ret;

      if(this.isAuth){
        ret = redirect ? <Redirect to="/" /> : <ComponentToProtect {...this.props} />;
      }
      else{
        ret = redirect ? (<ComponentToProtect {...this.props} />) : <span />;
      }
      
      return ret;
    }
  }
}