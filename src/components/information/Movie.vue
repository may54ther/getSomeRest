<template>
  <section class="sec__movie">
    <h2>영화 소개</h2>
    <div class="movie__box inner clearfix">
      <div class="box__poster">
        <img :src="movieData.poster_path" alt="포스터" v-if="movieData.poster_path !== null">
        <img
          src="../../assets/img_no_poster.png"
          alt="No-Data"
          v-if="movieData.poster_path === null"
        >
      </div>
      <div class="box__txt">
        <h3 class="txt__title">{{ movieData.title }}</h3>
        <dl class="txt__desc">
          <dd class="blind">원작이름</dd>
          <dt class="desc1">{{movieData.original_title}}</dt>

          <dd class="blind">장르, 개봉일, 상영시간, 평점</dd>
          <dt class="desc2">
            <span class="txt__genres">{{ movieGenres }}</span>
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
export default {
  name: "Movies",
  props: ["movieData", "movieGenres"]
};
</script>

<style src="@/style/information.css" scoped></style>
