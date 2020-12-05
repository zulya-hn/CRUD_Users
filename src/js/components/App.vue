<template>

  <div class="card">
    <div class="card-header">
      Add a new user
    </div>
    <div class="card-body">
      <form class="form-inline" v-on:submit.prevent="onAdd">
        <div class="form-group">
          <label>Full Name</label>
          <input v-model="newUser.fullName" type="text" class="form-control ml-sm-2 mr-sm-2 my-2"  required>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="newUser.email" type="text" class="form-control ml-sm-2 mr-sm-2 my-2" required>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="newUser.password" type="text" class="form-control ml-sm-2 mr-sm-2 my-2" required>
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input v-model="newUser.phone" type="text" class="form-control ml-sm-2 mr-sm-2 my-2" required>
        </div>
        <div class="form-group">
          <label>Status</label>
          <input v-model="newUser.userStatus" type="text" class="form-control ml-sm-2 mr-sm-2 my-2" required>
        </div>
        <div class="form-group">
          <label>Date Of Creation</label>
          <input v-model="newUser.dateOfCreation" type="text" class="form-control ml-sm-2 mr-sm-1 my-2" required>
        </div>
        <div class="form-group">
          <label>Last Change</label>
          <input v-model="newUser.dateOfChange" type="text" class="form-control ml-sm-2 mr-sm-1 my-2" required>
        </div>
        <div class="ml-auto text-right">
          <button type="submit" class="btn btn-primary my-2">Add</button>

        </div>
      </form>
    </div>
  </div>

  <div class="card mt-5">
    <div class="card-header">
      User List
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">
              ID
            </th>
            <th>
              Full Name
            </th>
            <th>
              Email
            </th>
            <th>
              Password
            </th>
            <th>
              Phone
            </th>
            <th>
              Status
            </th>
            <th>
              Date Of Creation
            </th>
            <th>
              Last Change
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(user, id) in users" :key="id">
            <template v-if="editId === id">

              <td>{{ editId }}</td>
              <td><input v-model="editUser.fullName" type="text"></td>
              <td><input v-model="editUser.email" type="text"></td>
              <td><input v-model="editUser.password" type="text"></td>
              <td><input v-model="editUser.phone" type="text"></td>
              <td><input v-model="editUser.userStatus" type="text"></td>
              <td><input v-model="editUser.dateOfCreation" type="text"></td>
              <td><input v-model="editUser.dateOfChange" type="text"></td>

              <td>
                    <span class="icon">
                      <i  @click="onUpdate(editId)" class="fa fa-check"></i>
                    </span>
                <span class="icon">
                      <i  @click="onCancel" class="fa fa-ban"></i>
                    </span>
              </td>

            </template>
            <template v-else>
              <td>
                {{ id }}
              </td>
              <td>
                {{user.fullName}}
              </td>
              <td>
                {{user.email}}
              </td>
              <td>
                {{user.password}}
              </td>
              <td>
                {{user.phone}}
              </td>
              <td>
                {{user.userStatus}}
              </td>
              <td>
                {{user.dateOfCreation}}
              </td>
              <td>
                {{user.dateOfChange}}
              </td>
              <td>

                <a href="#" class="icon">
                  <i @click="onDelete(id)" class="fa fa-trash"></i>
                </a>
                <a href="#" class="icon">
                  <i @click="onEdit(id, user)" class="fa fa-pencil"></i>
                </a>
              </td>
            </template>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {User} from '../user.js';

export default {
    data() {
        return {
          users: {},
          lastId: null,
          editId: null,
          editUser: null,
          newUser: null,
        };
    },
    created() {

    },
    computed: {

    },
    methods: {
      addForm() {

      },

      validateUserData() {

      },

      getUsersFromStorage() {

      },

      addUserToLocalStorage() {

      },

      removeUserFromStorage() {

      },

      onUpdate(id) {

      },

      onCancel() {

      },

      onDelete(id) {

      },

      onEdit(id, user) {

      },

      onAdd() {

      },
    },

};
</script>
