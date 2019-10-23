<template>
  <div class="profile-page">
    <Articles :favorited="favorited" :items-per-page="5">
    </Articles>
  </div>
</template>

<script>
import Articles from "../components/Articles";

export default {
  name: "FavoriteArticles",
  components: {
    Articles
  },
  computed: {
    favorited() {
      return this.$route.params.username;
    }
  }
};
</script>
