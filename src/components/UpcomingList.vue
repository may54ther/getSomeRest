<template>
  <section class="content__upcoming">
    <h2>현재 상영중인 영화</h2>
    <ul>
      <li v-bind:key="key" v-for="(upcoming, key) in upcomingDatas">
        <a @click="$store.commit('routerMovieInfo', upcoming[0])">
          <div class="upcoming__thumbnail">
            <img :src="upcoming[1]" alt="포스터">
          </div>
          <p class="upcoming__title">{{ upcoming[2] }}</p>
          <span class="upcoming__release">{{ upcoming[3] }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "UpcomingList",
  props: [],
  data() {
    return {
      upcomingDatas: []
    };
  },
  computed: {
    ...mapState(["url", "params", "imgUrl", "movieId"])
  },
  methods: {
    getUpcomingList() {
      this.axios
        .get(this.url.TMDb + this.url.upcoming, {
          params: {
            api_key: this.params.apiKey,
            language: this.params.langKo,
            page: 1
          }
        })
        .then(res => {
          const result = res.data.results;

          result.forEach((data, idx) => {
            if (idx >= 10) return;

            this.upcomingDatas.push([
              data.id,
              this.imgUrl.poster + data.poster_path,
              data.title,
              data.release_date
            ]);
          });
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {});
    }
  },
  created() {
    this.getUpcomingList();
  }
};
</script>