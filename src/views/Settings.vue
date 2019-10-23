<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-3 offset-md-4 col-xs-12">
          <h1 class="text-xs-center">Settings</h1>
          <form @submit.prevent="updateSettings()">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-sm"
                  type="text"
                  v-model="currentUser.username"
                  placeholder="Your username"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-sm"
                  rows="8"
                  v-model="currentUser.bio"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-sm"
                  type="text"
                  v-model="currentUser.email"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-sm"
                  type="password"
                  v-model="currentUser.password"
                  placeholder="Password"
                />
              </fieldset>
              <button @click="logout" class="btn btn-danger pull-xs-left">
                Sign out
              </button>
              <button class="btn btn-primary pull-xs-right">
                Update
              </button>
            </fieldset>
          </form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { LOGOUT, UPDATE_USER } from "../store/constants";

export default {
  name: "Settings",
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    updateSettings() {
      this.$store.dispatch(UPDATE_USER, this.currentUser).then(() => {
        // #todo, nice toast and no redirect
        this.$router.push({ name: "home" });
      });
    },
    logout() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 25px;
  font-family: sans-serif
}
.form-group{
  font-family: sans-serif
}
</style>
