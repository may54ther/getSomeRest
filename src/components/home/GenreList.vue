<template>
  <section class="sec_genre">
    <h3>{{ this.genreKor }}</h3>
    <div class="genre-slider-wrap clearfix">
      <ul class="genre__slider" :class="genreEng">
        <li v-bind:key="key" v-for="(item, key) in genreData">
          <a @click="$store.commit('routerMovieInfo', item.id)">
            <div class="genre__thumbnail">
              <img :src="item.backdrop" alt="배경사진" v-if="item.backdrop !== null">
              <img src="@/assets/img_no_backdrop.png" alt="No-Data" v-if="item.backdrop === null">
            </div>
            <p class="genre__title">{{item.title}}</p>
          </a>
        </li>
      </ul>

      <ul class="slider__btns">
        <li class="btn__prev">
          <button @click.prevent="handleSlider">
            <span class="blind">이전</span>
            <i class="fas fa-chevron-left"></i>
          </button>
        </li>
        <li class="btn__next">
          <button @click.prevent="handleSlider">
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
  props: ["genreNo", "genreKor", "genreEng"],
  data() {
    return {
      genreData: [],
      s_width: null,
      i: 0
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

            this.genreData.push({
              id: data.id,
              title: data.title,
              backdrop:
                data.backdrop_path === null
                  ? null
                  : this.imgURL.backdrop_s + data.backdrop_path
            });
          });
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {});
    },
    handleResize() {
      this.s_width = document.querySelector(".genre-slider-wrap").offsetWidth;

      document.querySelector(
        ".genre__slider"
      ).style.transform = `translate3d(0, 0, 0)`;
    },
    handleSlider(e) {
      const TARGET_CLASS = e.target.offsetParent.className;
      const SLIDER = document.querySelector("." + this.genreEng);
      const TOTAL_LENGTH = Math.floor(SLIDER.offsetWidth / this.s_width);

      console.log(SLIDER);

      if (TARGET_CLASS === "btn__prev" && this.i >= 0) {
        this.i--;
      } else if (TARGET_CLASS === "btn__next" && this.i < TOTAL_LENGTH) {
        this.i++;
      }

      let num = (this.s_width * this.i) % 200;
      SLIDER.style.transform = `translate3d(-${this.s_width * this.i -
        num}px, 0, 0)`;
    }
  },
  mounted() {
    this.getList(this.genreNo);
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>