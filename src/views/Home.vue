<template>
  <div class="container">
    <MovieSlider></MovieSlider>
    <div class="content">
      <NowPlayingList></NowPlayingList>
      <article class="content__genre">
        <h2>장르별 인기순위</h2>
        <GenreList
          v-bind:key="item.id"
          v-for="item in this.allGenres"
          :genreNo="item.id"
          :genreKor="item.kor"
          :class="item.eng"
        ></GenreList>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MovieSlider from "@/components/MovieSlider";
import NowPlayingList from "@/components/NowPlayingList";
import GenreList from "@/components/GenreList";

export default {
  components: { MovieSlider, NowPlayingList, GenreList },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState(["allGenres"])
  },
  mounted() {}
};
</script>
