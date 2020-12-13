<template>
  <div class="search-container">
    <form class="form-inline"
          @submit.prevent="onReset()">
      <div class="form-group">
        <label>Email</label>
        <input v-model="filter.email"
               type="text"
               class="form-control ml-sm-2 mr-sm-2 my-2">
      </div>
      <div class="form-group">
        <label>Phone</label>
        <label>
          <input v-model="filter.phone"
                 type="text"
                 class="form-control ml-sm-2 mr-sm-2 my-2">
        </label>
      </div>
      <div class="form-group">
        <label>Status</label>
        <select v-model="filter.status"
                name="select"
                class="form-control ml-sm-2 mr-sm-2 my-2"
        >
          <option value="">All Statuses</option>
          <option v-for="status in User.getStatuses()"
                  :value="status">
            {{ status }}
          </option>
        </select>
      </div>
      <button type="submit"
              class="btn btn-primary icon-margin">Reset
      </button>
    </form>
  </div>
</template>

<script>

import {User} from '../user';

export default {
  props: ['filter'],
  data() {
    return {
      User,
    };
  },
  methods: {
    onReset() {
      this.$emit('onReset');
    }
  }
};
</script>
