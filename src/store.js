import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apikey: "50d58edebb16d9143557fc5550d5d78b",
    url: {
      TMDb: "https://api.themoviedb.org",
      lang_ko: "&language=ko-KO",
      discover: "/discover/movie?",
      upcoming: "/movie/upcoming?",
      search: "/search/movie?"
    }
  },
  mutations: {},
  actions: {}
});
