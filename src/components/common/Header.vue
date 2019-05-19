<template>
  <header class="header">
    <h1 class="logo">
      <router-link :to="{'name':'home'}">
        <span class="blind">getSomeRest</span>
      </router-link>
    </h1>
    <span class="button__page-back">
      <a @click="pageBack">
        <i class="fas fa-chevron-left">
          <span class="blind">이전 페이지</span>
        </i>
      </a>
    </span>
    <span class="button__search">
      <router-link :to="{'name':'search'}">
        <i class="fas fa-search"></i>
      </router-link>
    </span>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    pageBack() {
      history.back();
    }
  }
};
</script>
