const userCookie = 'user';

export default class UserState {

  isLoggedIn() {
    if(this.getCookie(userCookie) === undefined){
      return false;
    }
    return !(this.getCookie(userCookie) === null);
  }

  userName(){
    return this.getCookie(userCookie);
  }

  sessionEnded(){
    this.expireCookie(userCookie);
  }

  loggedOut(){
    this.expireCookie(userCookie);
  }

  loggedIn(value){
    document.cookie = userCookie + "=" + value;
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
