<template>
  <div class="card mt-3">
    <div class="card-header hover-header"
         @click="showSearch = !showSearch">
      Search
      <i class="fa"
         :class="showSearch ? 'fa-angle-double-up' : 'fa-angle-double-down'">
      </i>
    </div>
    <transition name="slide">
      <div v-if="showSearch">
        <div class="card-body">
          <form class="row flex-end"
                @submit.prevent="onReset()">
            <div class="form-group col-12 col-sm-6 col-md-4 col-xl-2">
              <label>Email</label>
              <input v-model="filter.email"
                     type="text"
                     class="form-control">
            </div>
            <div class="form-group col-12 col-sm-6 col-md-4 col-xl-2">
              <label>Phone</label>
                <input v-model="filter.phone"
                       type="text"
                       class="form-control">
            </div>
            <div class="form-group col-12 col-sm-6 col-md-2 col-xl-2">
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
            <div class="form-group col-12 col-sm-6 col-md-2 col-xl-1">
              <button type="submit"
                      class="btn btn-primary button">Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>

import {User} from '../user';

export default {
  props: ['filter'],
  data() {
    return {
      User,
      showSearch: false,
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

<style scoped>

</style>
