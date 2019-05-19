<template>
  <section class="sec_genre">
    <h3>{{ this.genreKor }}</h3>
    <div class="slider__wrap">
      <ul class="slider__items">
        <li v-bind:key="key" v-for="(item, key) in genreData">
          <a @click="$store.commit('routerMovieInfo', item.id)">
            <div class="genre__thumbnail">
              <img :src="item.backdrop" alt="포스터">
            </div>
            <p class="genre__title">{{item.title}}</p>
          </a>
        </li>
      </ul>

      <ul class="slider__btns">
        <li class="btn__prev">
          <button>
            <span class="blind">이전</span>
            <i class="fas fa-chevron-left"></i>
          </button>
        </li>
        <li class="btn__next">
          <button>
            <span class="blind">다음</span>
            <i class="fas fa-chevron-right"></i>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "GenreList",
  props: ["genreNo", "genreKor"],
  data() {
    return {
      genreData: []
    };
  },
  computed: {
    ...mapState(["url", "params", "imgURL"])
  },
  methods: {
    getList(genreNo) {
      this.axios
        .get(this.url.TMDb + this.url.discover, {
          params: {
            api_key: this.params.apiKey,
            language: this.params.langKo,
            sort_by: this.params.sortBy,
            with_genres: genreNo
          }
        })
        .then(res => {
          const result = res.data.results;

          result.forEach((data, idx) => {
            if (idx >= 15) return;

            if (data.backdrop_path) {
              this.genreData.push({
                id: data.id,
                title: data.title,
                backdrop: this.imgURL.backdrop_s + data.backdrop_path
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
    this.getList(this.genreNo);
  }
};
</script>