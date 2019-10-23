<template>
  <div class="article-meta">
    <router-link class="linkcolor"
      :to="{ name: 'profile', params: { username: article.author.username } }"
    >
      <img :src="article.author.image" />
    </router-link>
    <div class="info">
      <router-link
        :to="{ name: 'profile', params: { username: article.author.username } }"
        class="author"
      >
        {{ article.author.username }}
      </router-link>
      <span class="date">{{ article.createdAt | date }}</span>
    </div>
    <template v-if="actions">
      <article-actions
        :article="article"
        :canModify="isCurrentUser()"
      ></article-actions>
    </template>
    <template v-else>
      <button
        class="btn btn-sm"
        v-if="!actions"
        @click="toggleFavorite"
        :class="{
          'btn-dark': article.favorited,
          'btn-outline-dark': !article.favorited
        }"
      >
        <i class="ion-heart"></i>
        <span class="counter"> {{ article.favoritesCount }} </span>
      </button>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import ArticleView from "../components/ArticleView";
import { FAVORITE_ADD, FAVORITE_REMOVE } from "../store/constants";

export default {
  name: "ArticleInfo",
  components: {
    // ArticleView
  },
  props: {
    article: {
      type: Object,
      required: true
    },
    actions: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods: {
    isCurrentUser() {
      if (this.currentUser.username && this.article.author.username) {
        return this.currentUser.username === this.article.author.username;
      }
      return false;
    },
    toggleFavorite() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
        return;
      }
      const action = this.article.favorited ? FAVORITE_REMOVE : FAVORITE_ADD;
      this.$store.dispatch(action, this.article.slug);
    }
  }
};
</script>

<style scoped lang="scss">
.link-color{
  color:red;
}
.btn-sm {
  position:absolute;
  // position: relative;
  transition: .1s ease;
  // left: 60%px;
  top: 100%;
  right: 30%;
}
.linkcolor{
  color: green;
}
router-link{
  color: black;
  background-attachment: fixed;
}

</style>
