
<template>
    <div class="corp-alert" :class="openPopup ? 'active' : ''"> <!-- class "active" here set modal popup -->
      <div class="alert__background"
           @click="closePopup()">
      </div>
        <div class="alert__window modal-open">
          <h2 class="alert__header">
            User List
          </h2>
          <table class="table table-striped">
            <tr class="row">
              <th class="col-4">ID</th>
              <td class="col-8">{{ user.id }}</td>
            </tr>
            <tr class="row">
              <th class="col-4">Full Name</th>
              <td class="col-8">{{ user.fullName }}</td>
            </tr>
            <tr class="row">
              <th class="col-4">Email</th>
              <td class="col-8">{{ user.email }}</td>
            </tr>
            <tr class="row">
              <th class="col-4">Phone</th>
              <td class="col-8">{{ user.phone }}</td>
            </tr>
            <tr class="row">
              <th class="col-4">Status</th>
              <td class="col-8">{{ user.userStatus }}</td>
            </tr>
            <tr class="row">
              <th class="col-4">Password</th>
              <td class="col-8">{{ user.password }}</td>
            </tr>
<!--            @param User user -->
            <tr class="row">
              <th class="col-4">Date Of Creation</th>
              <td class="col-8">{{ user.getDateOfCreation() }}</td>
            </tr>
            <tr class="row">
              <th class="col-4">Last Change</th>
              <td class="col-8">{{ user.getDateOfChange() }}</td>
            </tr>
          </table>
        </div>
    </div>
</template>

<script>
import {User} from '../user';

export default {
  props: {
    user: User,
    popupId: Number,
  },
  data() {
    return {
      User,
    };
  },
  // created() {
  //   if (this.popupId === this.user.id) {
  //     window.onscroll = function(){
  //       return false;
  //     }
  //   }
  // },
  methods: {
    closePopup() {
      this.$emit('closePopup');
      this.isModalVisible = true;
    }
  },
  computed: {
    openPopup() {
     return this.popupId === this.user.id;
    }
  }

};
</script>
