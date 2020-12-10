<template>

  <div class="wrapper">
    <div class="card">
      <div class="card-header">
        Add a new user
      </div>
      <div class="card-body add-container">
        <form class="form-inline"
              @submit.prevent="onAdd">
          <div class="form-group">
            <label>Full Name</label>
            <input v-model="newUser.fullName"
                   type="text"
                   class="form-control ml-sm-2 mr-sm-2 my-2"
            >

            <!--                   @keypress="noNumber(event)"-->
            <!--                     v-validate="{ required: true, regex: /^\d{4} \d{6}$/ }"  -->

          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="newUser.email"
                   type="text"
                   class="form-control ml-sm-2 mr-sm-2 my-2"
                   required>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="newUser.password"
                   type="text"
                   class="form-control ml-sm-2 mr-sm-2 my-2"
                   required>
          </div>
          <div class="form-group">
            <label>Phone</label>
            <label>
              <input v-model="newUser.phone"
                     type="text"
                     class="form-control ml-sm-2 mr-sm-1 my-2"
                     required>
            </label>
          </div>
          <div class="form-group">
            <label>Status</label>
              <select name="select"
                      class="form-control ml-sm-2 mr-sm-1 my-2"
                      v-model="newUser.userStatus"
                      required>
                <option value="client">client</option>
                <option value="partner">partner</option>
                <option value="admin">admin</option>
              </select>
          </div>
            <button type="submit"
                    class="btn btn-primary icon-margin">Add
            </button>
        </form>
      </div>
    </div>

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
              <th class="col-lg-3 col-xl-1">
                Password
              </th>
              <th class="col-lg-3 col-xl-2">
                Phone
              </th>
              <th class="col-lg-3 col-xl-1">
                Status
              </th>
              <th class="col-lg-3 col-xl-1">
                Date Of Creation
              </th>
              <th class="col-lg-3 col-xl-1">
                Last Change
              </th>
              <th class="col-xl-1">
              </th>
            </tr>
            <tr class="row one-user" v-for="(user, index) in users">
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
                  <input v-model="editUser.password"
                         type="text"
                         class="form-control"
                         required>
                </td>
                <td class="col-xl-1">
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
                    <option value="client">client</option>
                    <option value="partner">partner</option>
                    <option value="admin">admin</option>
                  </select>
                </td>
                <td class="col-xl-1"></td>
                <td class="col-xl-1"></td>
                <td class="col-xl-1">
                      <span class="icon">
                        <i @click="onUpdate(index)"
                           class="fa fa-check"></i>
                      </span>
                  <span class="icon icon-margin">
                        <i @click="onCancel"
                           class="fa fa-ban"></i>
                      </span>
                </td>
              </template>
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
                <td class="col-lg-3 col-xl-1">
                  {{ user.password }}
                </td>
                <td class="col-lg-3 col-xl-2">
                  {{ user.phone }}
                </td>
                <td class="col-lg-3 col-xl-1">
                  {{ user.userStatus }}
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
                    <i @click="onDelete(user.id, index)"
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

export default {
  data() {
    return {
      users: [],
      lastId: 0,
      editId: null,
      editUser: {},
      newUser: {},
      controls: [],
    };
  },

  created() {
    this.getUsersFromStorage();
    // this.validateUsers();

  },
  computed: {},
  methods: {

    // validateUsers() {
    //   for (let i = 0; i < this.users.length; i++) {
    //     this.controls.push({
    //       error: !this.users[i].pattern.test(this.users[i].value),
    //       activated: this.users[i].value !== ''
    //     });
    //   }
    // },

    validateUserData() {

    },

    getUsersFromStorage() {
      let usersIds = Object.keys(localStorage);
      let maxId = 0;

      for (let userId of usersIds) {
        let storageUser = localStorage.getItem(userId);

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
            storageUser.dateOfChange);

          this.users.push(user);

          if (userId > maxId) {
            maxId = userId;
          }
        } catch (e) {
        }
      }

      this.lastId = maxId;
    },

    addUserToLocalStorage(id, user) {
      const parsed = JSON.stringify(user);
      localStorage.setItem(id, parsed);
    },

    onUpdate(index) {
      this.addUserToLocalStorage(this.editId, this.editUser);

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

    onDelete(id, index) {
      if (confirm('Are you sure you want to delete the user?')) {
        localStorage.removeItem(id);
        this.users.splice(index, 1);
      }
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

    onAdd() {
      let id = +(this.lastId) + 1;

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

      this.addUserToLocalStorage(id, user);

      this.lastId = id;
      this.newUser = {};
    },


    // noNumber(evt) {
    //   let regex = new RegExp("^[a-zA-Z ]+$");
    //   let key = String.fromCharCode(!evt.charCode ? evt.which : evt.charCode);
    //   if (!regex.test(key)) {
    //     event.preventDefault();
    //     return false;
    //   }
    // }
  },

};

</script>
