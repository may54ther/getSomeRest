<template>
  <section class="sec__credits">
    <h2>출연진</h2>
    <div class="credits-crew inner">
      <h3>감독</h3>
      <ul class="clearfix">
        <li :key="idx" v-for="(item, idx) in movieCrew">
          <div class="credits-img">
            <img :src="item.profile_path" alt="감독">
          </div>
          <dl>
            <dt class="blind">이름</dt>
            <dd>{{ item.name }}</dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="credits-cast inner">
      <h3>출연진</h3>
      <ul class="clearfix">
        <li :key="idx" v-for="(item, idx) in movieCast">
          <div class="credits-img">
            <img :src="item.profile_path" alt="배우">
          </div>
          <dl>
            <dt class="blind">배역</dt>
            <dd>{{ item.character }} 역</dd>
            <dt class="blind">이름</dt>
            <dd>{{ item.name }}</dd>
          </dl>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MovieCredits",
  props: ["movieId"],
  data() {
    return {
      movieCast: [],
      movieCrew: []
    };
  },
  computed: {
    ...mapState(["url", "params", "imgURL"])
  },
  methods: {
    getMovieCredits(id) {
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
              profile_path: this.$store.state.imgURL.poster + data.profile_path
            });
          });
          cast.forEach((data, idx) => {
            if (idx >= 8) return;

            this.movieCast.push({
              character: data.character,
              name: data.name,
              profile_path: this.$store.state.imgURL.poster + data.profile_path
            });
          });
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {});
    }
  },
  created() {
    this.getMovieCredits(this.movieId);
  }
};
</script>

<style src="@/style/information.css" scoped></style>