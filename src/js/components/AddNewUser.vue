<template>
  <div class="card mt-3">
    <div class="card-header hover-header"
         @click="showAddForm = !showAddForm">
      Add a new user
      <i class="fa"
         :class="showAddForm ? 'fa-angle-double-up' : 'fa-angle-double-down'">
      </i>
    </div>
    <transition name="slide">
      <div v-if="showAddForm">
        <div class="card-body">
          <form class="row flex-end"
                @submit.prevent="onAdd">
            <div class="form-group col-12 col-sm-6 col-lg-4 col-xl-2">
              <label>Full Name</label>
              <span class="fa mx-2"
                    v-if="controls.fullName.activated"
                    :class="controls.fullName.error ?
                       'fa-exclamation-circle text-danger' :
                       'fa-check-circle text-success'">
                </span>
              <input v-model="newUser.fullName"
                     @input="onInput($event.target.value, 'fullName')"
                     type="text"
                     class="form-control"
                     required>
            </div>
            <div class="form-group col-12 col-sm-6 col-lg-4 col-xl-2">
              <label>Email</label>
              <span class="fa mx-2"
                    v-if="controls.email.activated"
                    :class="controls.email.error ?
                       'fa-exclamation-circle text-danger' :
                       'fa-check-circle text-success'">
                </span>
              <input v-model="newUser.email"
                     @input="onInput($event.target.value, 'email')"
                     type="text"
                     class="form-control"
                     required>
            </div>
            <div class="form-group col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
              <label>Phone</label>
                <span class="fa mx-2"
                      v-if="controls.phone.activated"
                      :class="controls.phone.error ?
                       'fa-exclamation-circle text-danger' :
                       'fa-check-circle text-success'">
                </span>
                <input v-model="newUser.phone"
                       @input="onInput($event.target.value, 'phone')"
                       type="text"
                       class="form-control"
                       required>
            </div>
            <div class="form-group col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
              <label>Status</label>
              <select name="select"
                      class="form-control"
                      v-model="newUser.userStatus"
                      required>
                <option v-for="status in User.getStatuses()"
                        :value="status">
                  {{ status }}
                </option>
              </select>
            </div>
            <div class="form-group col-12 col-sm-6 col-md-3 col-lg-4 col-xl-2">
              <label>Password</label>
              <input v-model="newUser.password"
                     type="text"
                     class="form-control"
                     required>
            </div>
            <div class="form-group col-12 col-sm-6 col-md-2 col-lg-4 col-xl-1">
              <button type="submit"
                      class="btn btn-primary button"
                      :disabled="submitDisabled">
                    Add
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
  props: ['newUser'],
  data() {
    return {
      User,
      validatePattern: {
        fullName: /^[a-zA-Z ]{2,30}$/,
        phone: /^[0-9]{7,14}$/,
        email: (/.+@.+\..+/i),
      },
      showAddForm: false,
      controls: {},
      submitDisabled: false
    };
  },
  created() {
    this.initValidation();
  },
  methods: {
    onInput(value, pattern) {
      let control = this.controls[pattern];
      control.error = !this.validatePattern[pattern].test(value);
      control.activated = true;

      this.submitDisabled = this.calculateDisabled();
    },

    onAdd() {
      this.initValidation();
      this.$emit('add');
    },

    initValidation() {
      for (let pattern in this.validatePattern) {
        this.controls[pattern] = {
          error: false,
          activated: false
        };
      }
    },

    calculateDisabled() {
      for (let pattern in this.validatePattern) {
        if (this.controls[pattern].activated === true && this.controls[pattern].error === true) {
          return true;
        }
      }

      return false;
    }
  },
};
</script>
