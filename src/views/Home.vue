<template>
  <div class="home-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-12">
          <div class="navbar">
            <div class="tag-list">
              <Tag v-for="(tag, index) in tags" :name="tag" :key="index">
              </Tag>
            </div>
          </div>
        </div>

        <div class="col-md-11">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <router-link :to="{ name: 'home' }" exact class="nav-link" active-class="active">
                  Global Articles
                </router-link>
              </li>
              <li class="nav-item" v-if="tag">
                <router-link
                  :to="{ name: 'home-tag', params: { tag } }"
                  class="nav-link"
                  active-class="active"
                >
                  <i class="ion-pound"></i> {{ tag }}
                </router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Tag from "../components/Tag";
import { FETCH_TAGS } from "../store/constants";

export default {
  name: "home",
  components: {
    Tag
  },
  mounted() {
    this.$store.dispatch(FETCH_TAGS);
  },
  computed: {
    ...mapGetters(["isAuthenticated", "tags"]),
    tag() {
      return this.$route.params.tag;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-item .nav-link{
  color: black;
  font-display: black;
}

</style>