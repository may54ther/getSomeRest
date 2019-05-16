<template>
  <section class="movie_credits">
    <h2>출연진</h2>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    getMovieCredits(id) {
      alert("[credits]: ", id);
    },
    created() {
      getMovieCredits(this.id);
    }
  }
};
</script>