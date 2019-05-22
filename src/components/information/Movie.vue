<template>
  <section class="sec__movie">
    <h2>영화 소개</h2>
    <div class="movie__box inner clearfix">
      <div class="box__poster">
        <img :src="this.movieData.poster_path" alt="포스터">
      </div>
      <div class="box__txt">
        <h3 class="txt__title">{{ movieData.title }}</h3>
        <dl class="txt__desc">
          <dd class="blind">원작이름</dd>
          <dt class="desc1">{{movieData.original_title}}, {{movieData.release_date}}</dt>

          <dd class="blind">장르, 개봉일, 상영시간, 평점</dd>
          <dt class="desc2">
            <span class="txt__genres">{{genres}}</span>
            <span class="txt__release-date">{{movieData.release_date}}</span>
            <span class="txt__runtime">{{movieData.runtime}}분</span>
            <span class="txt__vote-avg">🔥 {{movieData.vote_average}}/10</span>
          </dt>
        </dl>
        <strong class="txt__tagline">{{movieData.tagline}}</strong>
        <p class="txt__overview">{{movieData.overview}}</p>
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
      movieData: {},
      genres: null
    };
  },
  computed: {
    ...mapState(["url", "params", "imgURL"])
  },
  methods: {
    overviewLength() {
      let ww = window.width;
      console.log(ww);
    },
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
          const temp = [];
          this.movieData.genres.forEach(data => {
            temp.push(data.name);
          });
          this.genres = temp.toString().replace(/,/g, ", ");

          document.querySelector(
            ".sec__movie"
          ).style.background = `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${
            this.movieData.backdrop_path
          }) center / cover no-repeat`;
        });
    }
  },
  created() {
    this.getMovieData(this.movieId);
  }
};
</script>

<style src="@/style/information.css" scoped></style>
