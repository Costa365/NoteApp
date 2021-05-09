import React, { Component } from 'react';
import AdminService from './AdminService';
import './Styles.css'

export default class AdminInfo extends Component {

  constructor(props) {
      super(props);
      this.state = {users: [], loading: true};

      this.adminService = new AdminService();
    }

    componentDidMount(){
      this.fillData();
    }

    fillData() {
      var thisRef = this;
      this.adminService.users((data)=>{ 
        thisRef.setState({ users: data, loading:false });
      })
    }

    renderTableData() {
     return this.state.users.map((user, index) => {
        const { username, admin, date, email } = user
        return (
          <tr key={username}>
            <td>{username}</td>
            <td>{email}</td>
            <td>{date===undefined ? "" : (date.replace("T"," ").replace("Z"," "))}</td>
            <td>{admin===undefined ? "No" : (admin ? "Yes" : "No")}</td>
          </tr>
        )
      })
    }

    render() {
      if(this.state.users===null){
        return (
          <div>Can only be accessed by Admin users!</div>
        )
      }

      let content;
      if(this.state.loading){
        content = <div><img src="./spinner.gif" />&nbsp;Loading...</div>;
      }
      else {
        content = 
          <table id='users' >
            <tbody>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Signup Date</th>
                <th>Admin</th>
              </tr>
              {this.renderTableData()}
            </tbody>
          </table>;
      }

      return (
        <div>
          <h3 id='title'>Notes365 Users</h3>
          <div style={{'overflowX':'auto'}}>
            {content}
          </div>
        </div>
      )
    }
  }