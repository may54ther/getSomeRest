<template>
  <div class="content">
    <Movie :movieData="movieData" :movieGenres="movieGenres"/>
    <MovieCredits :movieCast="movieCast" :movieCrew="movieCrew"/>
    <SimilarMovies :similarMovies="similarMovies" :getNewMovieId="getMovieId"/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Movie from "../components/information/Movie";
import MovieCredits from "../components/information/MovieCredits";
import SimilarMovies from "../components/information/SimilarMovies";

export default {
  components: { Movie, MovieCredits, SimilarMovies },
  data() {
    return {
      movieData: null,
      movieGenres: "",
      movieCast: null,
      movieCrew: null,
      similarMovies: null
    };
  },
  computed: {
    ...mapState(["url", "params", "imgURL", "movieId"])
  },
  methods: {
    getMovieId(newId) {
      this.$store.commit("changeMovieId", newId);

      this.getMovieData(newId);
      this.getMovieCredits(newId);
      this.getSimilarMovies(newId);
    },
    getMovieData(id) {
      this.movieData = {};

      this.axios
        .get(this.url.TMDb + `/movie/${id}`, {
          params: {
            api_key: this.params.apiKey,
            language: this.params.langKo
          }
        })
        .then(res => {
          const result = res.data;

          this.movieData = {
            backdrop_path:
              result.backdrop_path === null
                ? null
                : this.imgURL.backdrop + result.backdrop_path,
            poster_path:
              result.poster_path === null
                ? null
                : this.imgURL.poster + result.poster_path,
            title: result.title,
            original_title: result.original_title,
            release_date: result.release_date,
            genres: result.genres,
            runtime: result.runtime,
            vote_average: result.vote_average,
            tagline: result.tagline,
            overview: (result.overview =
              result.overview.length > 300
                ? result.overview.substr(0, 300) + "..."
                : result.overview)
          };
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          this.movieData.genres.filter((genre, index) => {
            index < this.movieData.genres.length - 1
              ? (this.movieGenres += genre.name + ", ")
              : (this.movieGenres += genre.name);
          });

          if (this.movieData.backdrop_path !== null) {
            document.querySelector(
              ".sec__movie"
            ).style.background = `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${
              this.movieData.backdrop_path
            }) center / cover no-repeat`;
          }
        });
    },
    getMovieCredits(id) {
      this.movieCast = [];
      this.movieCrew = [];

      this.axios
        .get(this.url.TMDb + `/movie/${id}/credits`, {
          params: {
            api_key: this.params.apiKey
          }
        })
        .then(res => {
          const cast = res.data.cast;
          const crew = res.data.crew;

          crew.forEach((data, idx) => {
            if (data.job !== "Director") return;

            this.movieCrew.push({
              name: data.name,
              profile_path:
                data.profile_path === null
                  ? null
                  : this.$store.state.imgURL.poster + data.profile_path
            });
          });
          cast.forEach((data, idx) => {
            if (idx >= 8) return;

            this.movieCast.push({
              character: data.character !== "" ? data.character : "-",
              name: data.name,
              profile_path:
                data.profile_path === null
                  ? null
                  : this.$store.state.imgURL.poster + data.profile_path
            });
          });
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {});
    },
    getSimilarMovies(id) {
      this.similarMovies = [];

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
            if (data.poster_path !== "") {
              this.similarMovies.push({
                id: data.id,
                title: data.title,
                poster:
                  data.poster_path === null
                    ? null
                    : this.imgURL.poster + data.poster_path
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
    this.getMovieId(this.$route.params.id);
  },
  mounted() {}
};
</script>

<style src="@/style/information.css" scoped></style>

