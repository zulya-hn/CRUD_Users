export class User {
  constructor(fullName, email, password, phone, userStatus, dateOfCreation, dateOfChange) {
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
