<template>
  <section class="sec__similar">
    <h2>유사 영화 소개</h2>
    <ul class="inner clearfix">
      <li v-bind:key="index" v-for="(item, index) in similarMovies">
        <a @click="$store.commit('routerMovieInfo', item.id), reloading">
          <div class="movie-img">
            <img :src="item.poster" alt>
          </div>
          <span class="movie-title">{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SimilarMovies",
  props: ["movieId"],
  data() {
    return {
      similarMovies: []
    };
  },
  computed: {
    ...mapState(["url", "params", "imgURL"])
  },
  methods: {
    reloading() {
      history.back(0);
    },
    getSimilarMovies(id) {
      this.axios
        .get(this.url.TMDb + `/movie/${id}/similar`, {
          params: {
            api_key: this.params.apiKey,
            language: this.params.langKo
          }
        })
        .then(res => {
          const result = res.data.results;

          result.forEach((data, idx) => {
            if (data.poster_path) {
              this.similarMovies.push({
                id: data.id,
                title: data.title,
                poster: this.imgURL.poster + data.poster_path
              });
            }
          });
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {});
    }
  },
  created() {
    this.getSimilarMovies(this.movieId);
  },
  mounted() {}
};
</script>

<style src="@/style/information.css" scoped></style>