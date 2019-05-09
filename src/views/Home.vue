<template>
  <div class="container">
    <div class="slider">
      <h2 class="blind">Hot Movies</h2>
      <ul class="slider__items">
        <li>
          <div class="item__img"></div>
          <div class="itme__txt">
            <h3 class="txt__title">어벤져스: 엔드게임</h3>
            <p class="txt__subject">Avengers: End Game, 2019-04-24</p>
            <p class="txt__desc">인피니티 워 이후 절반만 살아남은 지구, 마지막 희망이 된 어벤져스! 먼저 떠넌 그들을 위해 모든 것을 걸었다.</p>
          </div>
        </li>
      </ul>
      <ul class="slider__buttons">
        <li></li>
        <li></li>
      </ul>
    </div>
    <section class="content__boxoffice">
      <h2>현재 상영중인 영화</h2>
    </section>
    <article class="content__genre">
      <h2>장르별 인기순위</h2>
      <section class="genre__romance">
        <h3>로맨스</h3>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  methods: {
    getGenreMovies() {}
  },
  computed: {},
  mounted() {
    const genre = new Map([
      ["Action", "액션"],
      ["Adventure", "어드벤쳐"],
      ["Animation", "애니메이션"],
      ["Comedy", "코미디"],
      ["Crime", "범죄"],
      ["Documentary", "다큐멘터리"],
      ["Drama", "드라마"],
      ["Family", "가족"],
      ["Fantasy", "판타지"],
      ["Horror", "호러"],
      ["Music", "음악"],
      ["Mystery", "미스테리"],
      ["Romance", "로맨스"],
      ["Science Fiction", "SF"]
    ]);
  }
};
</script>
