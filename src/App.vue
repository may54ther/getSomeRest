<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
    <ButtonTop></ButtonTop>
  </div>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ButtonTop from "./components/common/ButtonTop";
export default {
  components: { Header, Footer, ButtonTop },
  data() {
    return {};
  },
  created() {
    window.scrollTo(0, 0);
    console.log(process.env.NODE_ENV)
  }
};

require("@/style/reset.css");
require("@/style/app.css");
</script>
