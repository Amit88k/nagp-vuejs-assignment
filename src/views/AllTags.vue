<template>
  <div class="home-tag"><Articles :tag="tag"></Articles></div>
</template>

<script>
import Articles from "../components/Articles";

export default {
  name: "AllTags",
  components: {
    Articles
  },
  computed: {
    tag() {
      return this.$route.params.tag;
    }
  }
};
</script>
