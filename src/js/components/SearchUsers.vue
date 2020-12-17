<template>
  <div class="card mt-3">
    <div class="card-header">
      Search
    </div>
    <div class="card-body">
      <form class="row flex-end"
            @submit.prevent="onReset()">
        <div class="form-group col-12 col-sm-6 col-md-auto">
          <label>Email</label>
          <input v-model="filter.email"
                 type="text"
                 class="form-control">
<!--          ml-sm-2 mr-sm-2 my-2-->
        </div>
        <div class="form-group col-12 col-sm-6 col-md-auto">
          <label>Phone</label>
            <input v-model="filter.phone"
                   type="text"
                   class="form-control">
        </div>
        <div class="form-group col-12 col-sm-6 col-md-auto">
          <label>Status</label>
          <select v-model="filter.status"
                  name="select"
                  class="form-control"
          >
            <option value="">All Statuses</option>
            <option v-for="status in User.getStatuses()"
                    :value="status">
              {{ status }}
            </option>
          </select>
        </div>
        <div class="form-group col-12 col-sm-6 col-md-auto">
        <button type="submit"
                class="btn btn-primary button">Reset
        </button>
        </div>
      </form>
    </div>
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
      this.filter.email = '';
      this.filter.phone = '';
      this.filter.status = '';
    }
  }
};
</script>
