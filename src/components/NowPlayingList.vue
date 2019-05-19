<template>
  <section class="content__now-playing">
    <h2>현재 상영중인 영화</h2>
    <ul>
      <li v-bind:key="key" v-for="(item, key) in nowPlayingDatas">
        <a @click="$store.commit('routerMovieInfo', item.id)">
          <div class="now-playing__thumbnail">
            <img :src="item.poster" alt="포스터">
          </div>
          <p class="now-playing__title">{{ item.title }}</p>
          <span class="now-playing__release">{{ item.release_date }}</span>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "NowPlayingList",
  props: [],
  data() {
    return {
      nowPlayingDatas: []
    };
  },
  computed: {
    ...mapState(["url", "params", "imgURL", "movieId"])
  },
  methods: {
    getnowplayingList() {
      this.axios
        .get(this.url.TMDb + this.url.now_playing, {
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

            this.nowPlayingDatas.push({
              id: data.id,
              poster: this.imgURL.poster + data.poster_path,
              title: data.title,
              release_date: data.release_date
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
    this.getnowplayingList();
  }
};
</script>