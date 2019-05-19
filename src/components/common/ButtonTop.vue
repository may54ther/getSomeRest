<template>
  <div class="button-top">
    <a onclick="javascript:window.scrollTo(0, 0)">
      <i class="fas fa-arrow-up"></i>
      <span class="blind">상단으로</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    };
  },
  created() {
    //   window.addEventListener("scroll", function() {
    //     const HEIGHT = document.body.scrollHeight;
    //     let now = window.scrollY;
    //     console.log(HEIGHT, "now-scroll: " + now);
    //     if (now < HEIGHT / 10) {
    //       this.isShow = false;
    //     } else if (now >= HEIGHT / 10) {
    //       this.isShow = true;
    //     }
    //     console.log(this.isShow);
    //   });
  }
};
</script>