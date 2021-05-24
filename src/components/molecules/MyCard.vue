<template>
  <div class="block">
    <slot />
  </div>
</template>

<script>
export default {
    name:"Card"
};
</script>

<style lang="stylus" scoped>
@import "../../variables.styl";
.block {
  padding: 3em;
  border-radius: 35px;
  background: bg-color;
  box-shadow: 6px 6px 12px shadow-dark, -6px -6px 12px shadow-light;
  @media screen and (max-width: 480px) {
    padding: 1.5em;
  }
}
</style>