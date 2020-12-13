import {User} from './user.js';

export class UserStorage {

  static addUser(id, user) {
    const parsed = JSON.stringify(user);
    localStorage.setItem(id, parsed);
  }

  static removeUserById(id) {
    localStorage.removeItem(id);
  }

  static getUsersIds() {
    return Object.keys(localStorage).map(Number);
  }

  static getUserById(id) {

    let storageUser = localStorage.getItem(id);

    try {
      storageUser = JSON.parse(storageUser);
      let user = new User(
        storageUser.id,
        storageUser.fullName,
        storageUser.email,
        storageUser.password,
        storageUser.phone,
        storageUser.userStatus,
        storageUser.dateOfCreation,
        storageUser.dateOfChange
      );

      return user;
    } catch (e) {
      return null;
    }
  }
}
