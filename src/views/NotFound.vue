<template>
  <div id="not-found-container" class="view">
    <div class="travolta"></div>
    <div class="content">
      <h1 class="main text-404">404</h1>
      <h2 class="secondary text-404">Not found</h2>
      <router-link class="link text-404" to="/">Go home</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "~Styles/mixins";
@import "~Styles/variables";
@import "~Styles/colors";

#not-found-container {
  @include flex-center;
  height: 100%;
  width: 100%;
  .travolta {
    height: inherit;
    width: inherit;
    max-width: 900px;
    position: absolute;
    background-image: url("~Static/confused_travolta.gif");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @include mobile-height-breakpoint {
      width: 50%;
    }
  }
  .content {
    @include flex-center;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    color: $soft-white-color;
    .text-404 {
      margin: 10px;
      &.main {
        font-size: 25px;
        margin-bottom: 0px;
      }
      &.secondary {
        font-size: 18px;
      }
      &.link {
        font-size: 16px;
        height: auto;
        width: auto;
        color: $orange-color;
        border: 3px solid $orange-color;
        border-radius: 5px;
        padding: 5px;
      }
    }
  }
}
</style>
