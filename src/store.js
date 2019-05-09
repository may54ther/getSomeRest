import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apikey: "50d58edebb16d9143557fc5550d5d78b",
    url: {
      TMDb: "https://api.themoviedb.org/3",
      lang_ko: "&language=ko-KO",
      sort_by: "&sort_by=papularity.desc",
      discover: "/discover/movie?",
      upcoming: "/movie/upcoming?",
      search: "/search/movie?"
      // credits: `/movie/movie-id/credits?`
    }
  },
  getters: {},
  mutations: {},
  actions: {}
});
