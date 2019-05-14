<template>
  <section class="sec_genre">
    <h3>{{ this.genreKor }}</h3>
    <div class="slider__wrap">
      <ul class="slider__items">
        <li v-bind:key="movie[0]" v-for="movie in genreData">
          <a>
            <div class="genre__thumbnail">
              <img :src="movie[2]" alt="포스터">
            </div>
            <p class="genre__title">{{movie[1]}}</p>
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
          let idx = 0;

          result.forEach(data => {
            if (idx >= 15) return;

            if (data.backdrop_path) {
              this.genreData.push([
                data.id,
                data.title,
                this.imgUrl.backdrop_s + data.backdrop_path
              ]);
              idx++;
            }
          });
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {});
    }
  },
  computed: {
    ...mapState(["url", "params", "imgUrl"])
  },
  created() {
    this.getList(this.genreNo);
  }
};
</script>