export default class UserState {

  isLoggedIn() {
    if(this.getCookie('user') === undefined){
      return false;
    }
    return !(this.getCookie('user') === null);
  }

  userName(){
    return this.getCookie('user');
  }

  sessionEnded(){
    this.expireCookie('user');
  }

  loggedOut(){
    this.expireCookie('user');
  }

  loggedIn(value){
    document.cookie = "user=" + value;
  }

  getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  expireCookie(name){
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}
