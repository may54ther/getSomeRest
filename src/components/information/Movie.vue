<template>
  <section class="sec__movie">
    <h2>영화 소개</h2>
    <div class="movie__backdrop">
      <!-- <img :src="this.movieData.backdrop_path" alt="배경사진"> -->
    </div>
    <div class="movie__box inner">
      <div class="box__poster">
        <!-- <img :src="this.movieData.poster_path" alt="포스터"> -->
      </div>
      <div class="box__txt">
        <h3 class="txt__title">{{ this.movieData.title }}</h3>
        <dl>
          <dd class="blind">원작이름, 개봉일</dd>
          <dt>{{this.movieData.original_title}}, {{this.movieData.release_date}}</dt>

          <dd class="blind">개봉일, 장르, 상영시간, 평점</dd>
          <dt>
            <span class="txt__genres">{{this.genres}}</span>
            <span class="txt__runtime">&nbsp;&nbsp;{{this.movieData.runtime}}분</span>
            <span class="txt__vote-avg">🔥 {{this.movieData.vote_average}}/10</span>
          </dt>
        </dl>
        <strong class="txt__tagline">{{this.movieData.tagline}}</strong>
        <p class="txt__overview">{{this.movieData.overview}}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Movies",
  props: ["movieId"],
  data() {
    return {
      movieData: null,
      genres: null
    };
  },
  computed: {
    ...mapState(["url", "params", "imgURL"])
  },
  methods: {
    getMovieData(id) {
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
            backdrop_path: this.imgURL.backdrop + result.backdrop_path,
            poster_path: this.imgURL.poster + result.poster_path,
            title: result.title,
            original_title: result.original_title,
            release_date: result.release_date,
            genres: result.genres,
            runtime: result.runtime,
            vote_average: result.vote_average,
            tagline: result.tagline,
            overview: result.overview
          };
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          const temp = [];
          this.movieData.genres.forEach(data => {
            temp.push(data.name);
          });
          this.genres = temp.toString().replace(/,/g, ", ");
        });
    }
  },
  created() {
    this.getMovieData(this.movieId);
  }
};
</script>

<style src="@/style/movieInfo.css" scoped></style>
