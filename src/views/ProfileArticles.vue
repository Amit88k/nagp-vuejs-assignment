<template>
  <div class="profile-page">
    <Articles :author="author" :items-per-page="5"></Articles>
  </div>
</template>

<script>
import Articles from "../components/Articles";

export default {
  name: "ProfileArticles",
  components: {
    Articles
  },
  computed: {
    author() {
      return this.$route.params.username;
    }
  }
};
</script>
