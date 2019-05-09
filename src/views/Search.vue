<template>
  <div class="container">
    <div class="search-bar">
      <input type="text" placeholder="검색어를 입력하세요.">
    </div>
    <section class="sec_search">
      <h2 class="search-word">"{{ searchWord }}" 검색결과</h2>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchWord: "123"
    };
  }
};
</script>

<style scoped src="@/style/search.css">
</style>