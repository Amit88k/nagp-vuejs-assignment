<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-5">
            <h4>{{ article.title }}</h4>
            <ArticleInfo :article="article" :actions="true"></ArticleInfo>
          </div>
        </div>
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-xs-12">
          <div v-html="parseMarkdown(article.body)"></div>
          <ul class="tag-list">
            <li v-for="(tag, index) of article.tagList" :key="tag + index">
              <Tag
                :name="tag"
                className="tag-default tag-pill tag-outline"
              ></Tag>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="article-actions">
        <ArticleInfo :article="article" :actions="true"></ArticleInfo>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <UpdateComment
            v-if="isAuthenticated"
            :slug="slug"
            :userImage="currentUser.image"
          >
          </UpdateComment>
          <p v-else>
            <router-link :to="{ name: 'login' }">Sign in</router-link>
            
            <router-link :to="{ name: 'register' }">sign up</router-link>
            to add comments on this article.
          </p>
          <Comment
            v-for="(comment, index) in comments"
            :slug="slug"
            :comment="comment"
            :key="index"
          >
          </Comment>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import marked from "marked";
import store from "../store";
import ArticleInfo from "../components/ArticleInfo";
import Comment from "../components/Comment";
import UpdateComment from "../components/UpdateComment";
import Tag from "../components/Tag";
import { FETCH_ARTICLE, FETCH_COMMENTS } from "../store/constants";

export default {
  name: "article",
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  components: {
    ArticleInfo,
    Comment,
    UpdateComment,
    Tag
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_ARTICLE, to.params.slug),
      store.dispatch(FETCH_COMMENTS, to.params.slug)
    ]).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(["article", "currentUser", "comments", "isAuthenticated"])
  },
  methods: {
    parseMarkdown(content) {
      return marked(content);
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  background-color: rgb(114, 109, 109);
  color: black;
}
.container{
  color: black;
}
h4{
  align-items: center;
  
}
</style>
