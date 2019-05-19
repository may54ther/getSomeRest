<template>
  <div class="content">
    <Movie :movieId="this.movieId"></Movie>
    <MovieCredits :movieId="this.movieId"></MovieCredits>
    <SimilarMovies :movieId="this.movieId"></SimilarMovies>
  </div>
</template>

<script>
import Movie from "../components/information/Movie";
import MovieCredits from "../components/information/MovieCredits";
import SimilarMovies from "../components/information/SimilarMovies";

export default {
  components: { Movie, MovieCredits, SimilarMovies },
  data() {
    return {
      movieId: this.$route.params.id
    };
  }
};
</script>

<style src="@/style/information.css" scoped></style>

