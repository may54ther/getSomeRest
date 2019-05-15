import Vue from "vue";
import Vuex from "vuex";
import router from "@/router.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    url: {
      TMDb: "https://api.themoviedb.org/3",
      discover: "/discover/movie",
      upcoming: "/movie/upcoming",
      search: "/search/movie"
      // credits: `/movie/movie-id/credits?`
    },
    params: {
      apiKey: "50d58edebb16d9143557fc5550d5d78b",
      langKo: "ko-KO",
      sortBy: "popularity.desc"
    },
    imgUrl: {
      poster: "https://image.tmdb.org/t/p/w300_and_h450_bestv2",
      backdrop: "https://image.tmdb.org/t/p/w1280",
      backdrop_s: "https://image.tmdb.org/t/p/w500"
    },
    allGenres: [
      { id: 12, eng: "Adventure", kor: "어드벤쳐" },
      { id: 14, eng: "Fantasy", kor: "판타지" },
      { id: 16, eng: "Animation", kor: "애니메이션" },
      { id: 18, eng: "Drama", kor: "드라마" },
      { id: 27, eng: "Horror", kor: "호러" },
      { id: 28, eng: "Action", kor: "액션" },
      { id: 35, eng: "Comedy", kor: "코미디" },
      { id: 53, eng: "Thriller", kor: "스릴러" },
      { id: 80, eng: "Crime", kor: "범죄" },
      { id: 99, eng: "Documentary", kor: "다큐멘터리" },
      { id: 878, eng: "Science Fiction", kor: "공상과학" },
      { id: 9648, eng: "Mystery", kor: "미스테리" },
      { id: 10402, eng: "Music", kor: "음악" },
      { id: 10749, eng: "Romance", kor: "로맨스" },
      { id: 10751, eng: "Family", kor: "가족" },
      { id: 10752, eng: "War", kor: "전쟁" }
    ],
    movieId: null
  },
  getters: {},
  mutations: {
    routerMovieInfo: (state, payload) => {
      state.movieId = payload;
      console.log(state.movieId);
      router.push({ path: "/movie/" + state.movieId });
    }
  },
  actions: {}
});
