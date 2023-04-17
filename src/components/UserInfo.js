export default class UserInfo {
    constructor({
        nameSelector,
        professionSelector,
        avatarSelector
    }) {
        this._name = document.querySelector(nameSelector);
        this._about = document.querySelector(professionSelector);
        this._avatar = document.querySelector(avatarSelector);
        this._userId;

    }

    getUserInfo() {
        this._userInfo = {};
        this._userInfo.name = this._name.textContent;
        this._userInfo.about = this._about.textContent;
        return this._userInfo;
    }

    getUserId() {
        return this._userId;
      }

    setUserInfo(item) {
        this._name.textContent = item.name;
        this._about.textContent = item.about;
        this._userId = item._id;
    }

    setUserAvatar(item) {
        this._avatar.src = item.avatar;
      }
}