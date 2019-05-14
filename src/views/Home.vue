<template>
  <div class="container">
    <MovieSlider></MovieSlider>
    <div class="content">
      <UpcomingList></UpcomingList>
      <article class="content__genre">
        <h2>장르별 인기순위</h2>
        <GenreList
          v-bind:key="data.id"
          v-for="data in this.allGenres"
          :genreNo="data.id"
          :genreKor="data.kor"
          :class="data.eng"
        ></GenreList>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import MovieSlider from "@/components/MovieSlider";
import UpcomingList from "@/components/UpcomingList";
import GenreList from "@/components/GenreList";

export default {
  components: { MovieSlider, UpcomingList, GenreList },
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
