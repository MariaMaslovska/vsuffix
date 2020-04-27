<template>
  <header class="header">
    <div class="container-header">
      <div class="header__wrap">
        <Burger />
        <div class="header__logo-wrap">
          <router-link to="/">
            <img src="/svg/logo-1.svg" alt="logo" class="header__logo-1" />
            <img src="/svg/logo-2.svg" alt="logo" class="header__logo-2" />
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Burger from "@/chunks/app/burger/burger";
export default {
  name: "suffix-header",
  components: {
    Burger
  }
};
</script>

<style lang="scss">
@import "header.scss";
</style>
