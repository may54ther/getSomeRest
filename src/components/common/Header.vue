<template>
  <header class="header">
    <h1 class="logo">
      <router-link :to="{'name':'home'}">
        <span class="blind">getSomeRest</span>
      </router-link>
    </h1>
    <span class="button__search">
      <router-link :to="{'name':'search'}">
        <i class="fas fa-search"></i>
      </router-link>
    </span>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>
