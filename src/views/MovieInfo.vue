<template>
  <div class="content">
    <Movie></Movie>
    <MovieCredits></MovieCredits>
    <SimilarMovies></SimilarMovies>
  </div>
</template>

<script>
import Movie from "@/components/movieInfo/Movie";
import MovieCredits from "@/components/movieInfo/MovieCredits";
import SimilarMovies from "@/components/movieInfo/SimilarMovies";

export default {
  components: { Movie, MovieCredits, SimilarMovies },
  data() {
    return {
      movieId: this.$route.params.id
    };
  },
  computed: {},
  methods: {},
  created() {
    console.log(this.movieId);
  }
};
</script>
