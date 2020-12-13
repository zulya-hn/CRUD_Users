<template>
  <div class="wrapper">

    <!--  ADD NEW USER -->

    <add-new-user :newUser="newUser"
                  @add="onAdd()">
    </add-new-user>

    <!-- SEARCH CONTAINER -->

    <search-users :filter="filter">
    </search-users>

    <!-- TITLE -->

    <div class="card mt-5">
      <div class="card-header">
        User List
      </div>
      <div class="card-body">
        <div class="user-container">
          <tr class="row one-user">
            <th class="col-lg-3 col-xl-1">
              ID
            </th>
            <th class="col-lg-3 col-xl-2">
              Full Name
            </th>
            <th class="col-lg-3 col-xl-2">
              Email
            </th>
            <th class="col-lg-3 col-xl-2">
              Phone
            </th>
            <th class="col-lg-3 col-xl-1">
              Status
            </th>
            <th class="col-lg-3 col-xl-1">
              Password
            </th>
            <th class="col-lg-3 col-xl-1">
              Date Of Creation
            </th>
            <th class="col-lg-3 col-xl-1">
              Last Change
            </th>
          </tr>

          <!-- EDIT USERS -->

          <tr class="row one-user"
              v-for="(user) in filteredUsers">

            <template v-if="editId === user.id">
              <td class="col-xl-1">{{ user.id }}</td>
              <td class="col-xl-2">
                <input v-model="editUser.fullName"
                       type="text"
                       class="form-control"
                       required>
              </td>
              <td class="col-xl-2">
                <input v-model="editUser.email"
                       type="text"
                       class="form-control"
                       required>
              </td>
              <td class="col-xl-2">
                <input v-model="editUser.phone"
                       type="text"
                       class="form-control"
                       required>
              </td>
              <td class="col-xl-1">
                <select name="select"
                        class="form-control"
                        v-model="editUser.userStatus"
                        required>
                  <option v-for="status in User.getStatuses()"
                          :value="status">
                    {{ status }}
                  </option>
                </select>
              </td>
              <td class="col-xl-1">
                <input v-model="editUser.password"
                       type="text"
                       class="form-control"
                       required>
              </td>
              <td class="col-xl-1"></td>
              <td class="col-xl-1"></td>
              <td class="col-xl-1">
                      <span class="icon">
                        <i @click="onUpdate(user.id)"
                           class="fa fa-check"></i>
                      </span>
                <span class="icon icon-margin">
                        <i @click="onCancel"
                           class="fa fa-ban"></i>
                      </span>
              </td>
            </template>

            <!-- DATA TABLE -->

            <template v-else>
              <td class="col-lg-3 col-xl-1">
                {{ user.id }}
              </td>
              <td class="col-lg-3 col-xl-2">
                {{ user.fullName }}
              </td>
              <td class="col-lg-3 col-xl-2">
                {{ user.email }}
              </td>
              <td class="col-lg-3 col-xl-2">
                {{ user.phone }}
              </td>
              <td class="col-lg-3 col-xl-1">
                {{ user.userStatus }}
              </td>
              <td class="col-lg-3 col-xl-1">
                {{ user.password }}
              </td>
              <td class="col-lg-3 col-xl-1">
                {{ user.getDateOfCreation() }}
              </td>
              <td class="col-lg-3 col-xl-1">
                {{ user.getDateOfChange() }}
              </td>
              <td class="col-xl-1">
                <a href="#"
                   class="icon">
                  <i @click="onEdit(user.id, user)"
                     class="fa fa-pencil"></i>
                </a>
                <a href="#"
                   class="icon icon-margin">
                  <i @click="onDelete(user.id)"
                     class="fa fa-trash"></i>
                </a>
              </td>
            </template>
          </tr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {User} from '../user.js';
import {UserStorage} from '../localStorageHelper.js';
import AddNewUser from './AddNewUser';
import SearchUsers from './SearchUsers';

export default {
  data() {
    return {
      users: [],
      newUser: {},
      lastId: 0,
      editId: null,
      editUser: {},
      User,
      filter: {
        email: '',
        phone: '',
        status: '',
      }
    };
  },

  created() {
    this.getUsersFromStorage();
  },

  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        (user.userStatus === this.filter.status || this.filter.status === '')
        && (user.email.includes(this.filter.email) || this.filter.email === '')
        && (user.phone.includes(this.filter.phone) || this.filter.phone === '')
      );
    },
  },
  methods: {

    onAdd() {
      let id = this.lastId + 1;

      let user = new User(
        id,
        this.newUser.fullName,
        this.newUser.email,
        this.newUser.password,
        this.newUser.phone,
        this.newUser.userStatus,
        null,
        null);

      this.users.push(user);

      UserStorage.addUser(id, user);

      this.lastId = id;
      this.newUser = {};
    },

    onUpdate() {
      UserStorage.addUser(this.editId, this.editUser);
      let index = this.getUsersIndexById(this.editId);

      this.users[index].id = this.editUser.id;
      this.users[index].fullName = this.editUser.fullName;
      this.users[index].email = this.editUser.email;
      this.users[index].password = this.editUser.password;
      this.users[index].phone = this.editUser.phone;
      this.users[index].userStatus = this.editUser.userStatus;
      this.users[index].dateOfCreation = this.editUser.dateOfCreation;
      this.users[index].dateOfChange = new Date();
      this.editId = null;
    },

    onCancel() {
      this.editId = null;
    },

    getUsersFromStorage() {
      let usersIds = UserStorage.getUsersIds();
      let maxId = 0;

      for (let userId of usersIds) {
          let user = UserStorage.getUserById(userId);

          if(user === null) {
            continue;
          }

          this.users.push(user);

          if (userId > maxId) {

            maxId = userId;
          }
      }

      this.lastId = maxId;
    },

    onEdit(id, user) {
      this.editId = id;

      this.editUser.id = user.id;
      this.editUser.fullName = user.fullName;
      this.editUser.email = user.email;
      this.editUser.password = user.password;
      this.editUser.phone = user.phone;
      this.editUser.userStatus = user.userStatus;
      this.editUser.dateOfCreation = user.dateOfCreation;
      this.editUser.dateOfChange = user.dateOfChange;
    },

    onDelete(id) {
      if (confirm('Are you sure you want to delete the user?')) {
        UserStorage.removeUserById(id);

        let index = this.getUsersIndexById(id);
        this.users.splice(index, 1);
      }
    },

    getUsersIndexById(id) {
      return Object.keys(this.users).find(index => this.users[index].id === id);
    },
  },

  components: {
    SearchUsers,
    AddNewUser,
  }

};

// noNumber(evt) {
//   let regex = new RegExp("^[a-zA-Z ]+$");
//   let key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
//   if (!regex.test(key)) {
//     event.preventDefault();
//     return false;
//   }
// }

// notNumber (input) {
//   if (input.value.match(/\d/g || /\+/g)) {
//     return false;
//   }
//   input.classList.add('error');
//   return true;
// }

// notEmail(input) {
//   if (input.value.match(/@/g)) {
// (/.+@.+\..+/i)
//     return false;
//   }
//   input.classList.add('error');
//   return true;
// }

// validateUsers() {
//   for (let i = 0; i < this.users.length; i++) {
//     this.controls.push({
//       error: !this.users[i].pattern.test(this.users[i].value),
//       activated: this.users[i].value !== ''
//     });
//   }
// },
// getStatuses() {
//   return ['client', 'partner', 'admin'];
// },
// validateUserData() {
//
// },
</script>
