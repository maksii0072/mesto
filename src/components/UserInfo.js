export default class UserInfo {
  constructor({nameSelector, professionSelector}) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(professionSelector);

  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo.name = this._name.textContent;
    this._userInfo.about = this._about.textContent;
    return this._userInfo;
  }



  setUserInfo({name, about}) {
    this._name.textContent = name;
    this._about.textContent = about;
  }
}


