<template>
  <div class="content">
    <div class="search-bar">
      <input type="text" placeholder="검색어를 입력하세요." @change="getKeyword">
    </div>
    <section class="sec_search">
      <h2 class="search-word">"{{ searchWord }} " 검색결과</h2>
      <ul>
        <li v-bind:key="key" v-for="(search, key) in searchList">
          <a @click="$store.commit('routerMovieInfo', search[0])">
            <div class="search__thumbnail">
              <img :src="search[1]" alt="포스터" v-if="search[1] !== null">
              <img src="../assets/img_no_poster.png" alt="No-Data" v-if="search[1] === null">
            </div>
            <p class="search__title">{{ search[2] }}</p>
            <p class="search__release">{{ search[3] }}</p>
          </a>
        </li>
      </ul>
      <button
        class="search__button-more"
        @click="getPageMore"
        style="color:white"
        v-show="showBtns"
      >더 불러오기</button>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      searchWord: null,
      searchList: [],
      pageNo: 1,
      showBtns: false
    };
  },
  computed: {
    ...mapState(["url", "params", "imgURL"])
  },
  methods: {
    getKeyword(e) {
      this.searchWord = e.target.value;
      this.searchList = [];
      this.getSearchList(this.searchWord);
    },
    getPageMore() {
      this.pageNo++;
      this.getSearchList(this.searchWord, this.pageNo);
    },
    getSearchList(keyword, pageNo) {
      this.axios
        .get(this.url.TMDb + this.url.search, {
          params: {
            api_key: this.params.apiKey,
            language: this.params.langKo,
            query: keyword,
            include_adult: "false",
            page: pageNo
          }
        })
        .then(res => {
          const result = res.data.results;
          result.forEach((data, idx) => {
            this.searchList.push([
              data.id,
              data.poster_path === null
                ? null
                : this.imgURL.poster + data.poster_path,
              data.title,
              data.release_date === "" ? "-" : data.release_date
            ]);
          });
          return result.length;
        })
        .then(length => {
          if (!length) {
            alert("데이터가 없습니다.");
            this.showBtns = false;
          } else this.showBtns = true;
        })
        .catch(err => {
          console.error(err);
        })
        .finally(fin => {});
    }
  }
};
</script>

<style scoped src="@/style/search.css">
</style>