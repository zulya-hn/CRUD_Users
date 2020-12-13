<template>
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
        </div>
        <div class="form-group">
          <label>Email</label>
          <input v-model="newUser.email"
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
            <option v-for="status in User.getStatuses()"
                    :value="status">
              {{ status }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input v-model="newUser.password"
                 type="text"
                 class="form-control ml-sm-2 mr-sm-2 my-2"
                 required>
        </div>
        <button type="submit"
                class="btn btn-primary icon-margin">Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>

import {User} from '../user';

export default {
  props: ['newUser'],
  data() {
    return {
      User,
    };
  },
  methods: {
    onAdd() {
      this.$emit('add');
    }

  }
};
</script>
