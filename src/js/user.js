export class User {
  constructor(id, fullName, email, password, phone, userStatus, dateOfCreation, dateOfChange) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.userStatus = userStatus;
    this.dateOfCreation = dateOfCreation ? new Date(dateOfCreation) : new Date();
    this.dateOfChange = dateOfChange ? new Date(dateOfChange) : new Date();
  }

  static getStatuses() {
    return ['client', 'partner', 'admin']
  }

  getDateOfCreation() {
    let dd = String(this.dateOfCreation.getDate()).padStart(2, '0');
    let mm = String(this.dateOfCreation.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = this.dateOfCreation.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }

  getDateOfChange() {
    let dd = String(this.dateOfChange.getDate()).padStart(2, '0');
    let mm = String(this.dateOfChange.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = this.dateOfChange.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
  }
}
