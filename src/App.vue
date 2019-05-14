<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
export default {
  components: { Header, Footer },
  data() {
    return {};
  }
};

require("@/style/reset.css");
require("@/style/app.css");
</script>
