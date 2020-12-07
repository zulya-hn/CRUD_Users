export class User {
  constructor(id, fullName, email, password, phone, userStatus, dateOfCreation, dateOfChange) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.userStatus = userStatus;
    // TODO dates parse
    this.dateOfCreation = dateOfCreation;
    this.dateOfChange = dateOfChange;
  }

  static getStatuses() {
    return ['client', 'partner', 'admin']
  }
}
