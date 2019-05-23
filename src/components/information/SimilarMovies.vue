<template>
  <section class="sec__similar" v-if="similarMovies.length !== 0">
    <h2>유사 영화 소개</h2>
    <ul class="inner clearfix">
      <li v-bind:key="index" v-for="(item, index) in this.similarMovies">
        <a @click="getNewMovieId(item.id)">
          <div class="movie-img">
            <img :src="item.poster" alt="포스터" v-if="item.poster !== null">
            <img src="../../assets/img_no_poster.png" alt="No-Data" v-if="item.poster === null">
          </div>
          <span class="movie-title">{{ item.title }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "SimilarMovies",
  props: ["similarMovies", "getNewMovieId"],
  data() {
    return {
      similarLength: this.similarMovies.length
    };
  }
};
</script>

<style src="@/style/information.css" scoped></style>