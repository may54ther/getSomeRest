<template>
  <div class="slider__movie">
    <h2 class="blind">인기있는 영화</h2>
    <div class="slider__wrap">
      <ul class="slider__items">
        <li v-bind:key="key" v-for="(item, key) in sliderItems">
          <a @click="$store.commit('routerMovieInfo', item.id)">
            <div class="item__img">
              <img :src="item.backdrop" alt="슬라이드 이미지">
            </div>
            <div class="item__txt">
              <h3 class="txt__title">{{item.title}}</h3>
              <p class="txt__subject">{{item.original_title}}, {{item.release_date}}</p>
              <p class="txt__desc">{{item.overview}}</p>
            </div>
          </a>
        </li>
      </ul>

      <ul class="slider__buttons">
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      sliderItems: []
    };
  },
  computed: {
    ...mapState(["url", "params", "imgURL"])
  },
  methods: {
    getSliderItems() {
      this.axios
        .get(this.url.TMDb + this.url.discover, {
          params: {
            api_key: this.params.apiKey,
            language: this.params.langKo
          }
        })
        .then(res => {
          const result = res.data.results;

          result.forEach((data, idx) => {
            if (idx >= 5) return;

            this.sliderItems.push({
              id: data.id,
              backdrop: this.imgURL.backdrop + data.backdrop_path,
              title: data.title,
              original_title: data.original_title,
              release_date: data.release_date,
              overview: data.overview
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
    this.getSliderItems();
  }
};
</script>