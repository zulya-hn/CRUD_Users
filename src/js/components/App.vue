<template>
  <div class="container-fluid">

    <!--  ADD NEW USER -->

    <add-new-user :newUser="newUser"
                  @add="onAdd()">
    </add-new-user>

    <!-- SEARCH CONTAINER -->

    <search-users :filter="filter">
    </search-users>

    <div v-for="(user) in filteredUsers">
      <popup :user="user"
             v-if="popupId === user.id"
             :popupId="popupId"
             @closePopup="closePopup()">
      </popup>
    </div>

    <!-- TITLE -->

    <div class="card mt-3">
      <div class="card-header">
        User List
      </div>
      <div class="card-body center">
        <div class="row one-user table-title"
            v-if="!emptyFilteredUsers">
          <div class="col-3 col-md-1 col-lg-1 col-xl-1 id"
              @click="sortIdIncrease = !sortIdIncrease;">
            ID
          </div>
          <div class="col-5 col-md-6 col-md-4 col-lg-3 col-xl-2"
               @click="sortNameIncrease = !sortNameIncrease;">
            Full Name
          </div>
          <div class="d-none d-lg-block col-lg-2 col-xl-2">
            Email
          </div>
          <div class="d-none d-lg-block col-lg-2 col-xl-2">
            Phone
          </div>
          <div class="d-none col-md-3 d-md-block col-lg-2 col-xl-1">
            Status
          </div>
          <div class="d-none d-xl-block col-lg-2 col-xl-1">
            Password
          </div>
          <div class="d-none d-xl-block col-xl-1">
            Date Of Creation
          </div>
          <div class="d-none d-xl-block col-xl-1">
            Last Change
          </div>
        </div>
        <div class="row"
            v-if="emptyFilteredUsers">
          <div class="col"> {{ message }}</div>
        </div>

        <!-- EDIT USERS -->

        <div v-for="(user) in filteredUsers">
          <div class="row one-user">
            <template v-if="editId === user.id">
              <div class="col-xl-1">{{ user.id }}</div>
              <div class="col-xl-2">
                <input v-model="editUser.fullName"
                       type="text"
                       class="form-control"
                       required>
              </div>
              <div class="col-xl-2">
                <input v-model="editUser.email"
                       type="text"
                       class="form-control"
                       required>
              </div>
              <div class="col-xl-2">
                <input v-model="editUser.phone"
                       type="text"
                       class="form-control"
                       required>
              </div>
              <div class="col-xl-1">
                <select name="select"
                        class="form-control"
                        v-model="editUser.userStatus"
                        required>
                  <option v-for="status in User.getStatuses()"
                          :value="status">
                    {{ status }}
                  </option>
                </select>
              </div>
              <div class="col-xl-1">
                <input v-model="editUser.password"
                       type="text"
                       class="form-control"
                       required>
              </div>
              <div class="col-xl-1"></div>
              <div class="col-xl-1"></div>
              <div class="col-xl-1">
                <span class="icon">
                  <i @click="onUpdate(user.id)"
                     class="fa fa-check pointer"></i>
                </span>
                <span class="icon">
                  <i @click="onCancel"
                     class="fa fa-ban pointer"></i>
                </span>
              </div>
            </template>

            <!-- DATA TABLE -->

            <template v-else>
              <div class="col-3 col-md-1 col-lg-1 col-xl-1">
                {{ user.id }}
              </div>
              <div class="col-5 col-sm-6 col-md-6 col-lg-3 col-xl-2">
                {{ user.fullName }}
              </div>
              <div class="d-none d-lg-block col-lg-2 col-xl-2">
                {{ user.email }}
              </div>
              <div class="d-none d-lg-block col-lg-2 col-xl-2">
                {{ user.phone }}
              </div>
              <div class="d-none d-md-block col-md-3 col-lg-2 col-xl-1">
                {{ user.userStatus }}
              </div>
              <div class="d-none d-xl-block col-lg-2 col-xl-1">
                {{ user.password }}
              </div>
              <div class="d-none d-xl-block col-xl-1">
                {{ user.getDateOfCreation() }}
              </div>
              <div class="d-none d-xl-block col-xl-1">
                {{ user.getDateOfChange() }}
              </div>
              <div class="col-4 col-sm-3 col-md-2 col-lg-2 col-xl-1">
                <a class="d-xl-none icon pointer">
                  <i @click="showPopup(user.id)"
                     class="fa fal fa-info-circle mr-sm-2"></i>
                </a>
                <a class="icon pointer">
                  <i @click="onEdit(user.id, user)"
                     class="fa fa-pencil mr-sm-2"></i>
                </a>
                <a class="icon pointer">
                  <i @click="onDelete(user.id)"
                     class="fa fa-trash mr-sm-2"></i>
                </a>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--  </div>-->
</template>

<script>
import {User} from '../user.js';
import {UserStorage} from '../localStorageHelper.js';
import AddNewUser from './AddNewUser';
import SearchUsers from './SearchUsers';
import Popup from './Popup';

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
      },
      message: 'No matches found',
      sortIdIncrease: true,
      sortNameIncrease: true,
      hiddenInfoPopup: true,
      popupId: 0,
      isModalVisible: false,
    };
  },

  created() {
    this.getUsersFromStorage();
  },

  computed: {
    filteredUsers() {

      this.users.sort( (a, b) => this.sortNameIncrease ?
        a.fullName.localeCompare(b.fullName) : b.fullName.localeCompare(a.fullName));
      this.users.sort( (a, b) => this.sortIdIncrease ? a.id - b.id : b.id - a.id);

      return this.users
        .filter(user =>
        (user.userStatus === this.filter.status || this.filter.status === '')
        && (user.email.includes(this.filter.email) || this.filter.email === '')
        && (user.phone.includes(this.filter.phone) || this.filter.phone === '')
        );
    },
    emptyFilteredUsers() {
      return this.filteredUsers.length === 0;
    },
  },

  watch: {
    isModalVisible: function() {
      if(this.isModalVisible){
        document.documentElement.style.overflow = 'hidden'
        return
      }
      document.documentElement.style.overflow = 'auto'
    }
  },

  methods: {

    closePopup() {
      this.popupId = 0
    },

    showPopup(id) {
      this.popupId = id;
      this.isModalVisible = false;
    },

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
      this.editUser.dateOfChange = new Date();

      UserStorage.addUser(this.editId, this.editUser);
      let index = this.getUsersIndexById(this.editId);

      this.users[index].id = this.editUser.id;
      this.users[index].fullName = this.editUser.fullName;
      this.users[index].email = this.editUser.email;
      this.users[index].password = this.editUser.password;
      this.users[index].phone = this.editUser.phone;
      this.users[index].userStatus = this.editUser.userStatus;
      this.users[index].dateOfCreation = this.editUser.dateOfCreation;
      this.users[index].dateOfChange = this.editUser.dateOfChange;
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

        if (user === null) {
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
    Popup
  }

};

</script>
