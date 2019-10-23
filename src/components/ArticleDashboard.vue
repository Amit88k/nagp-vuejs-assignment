<template>
  <div class="article-preview" >
    <ArticleInfo isPreview :article="article" />
    <router-link :to="articleLink" class="preview-link">
      <h1 v-text="article.title" />
      <p v-text="article.description" />
      <span>Read more...</span>
      <TagList :tags="article.tagList" />
    </router-link>
  </div>
</template>

<script>
import ArticleInfo from "./ArticleInfo";
import TagList from "./TagList";

export default {
  name: "ArticleDashboard",
  components: {
    ArticleInfo,
    TagList
  },
  props: {
    article: { type: Object, required: true }
  },
  computed: {
    articleLink() {
      return {
        name: "article",
        params: {
          slug: this.article.slug
        }
      };
    }
  }
};
</script>

<style scoped lang="scss">
.preview-link{
  font-family:sans serif;
  color:black; 
  // font-style: italic;
  font-weight: 300
}
.article-preview{
  font-family:sans serif;
  color:black; 
  // font-style: italic;
}
</style>
