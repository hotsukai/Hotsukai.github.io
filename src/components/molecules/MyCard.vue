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
.block {
  padding: 3em;
  border-radius: 35px;
  background: #f4f5f7;
  box-shadow: 6px 6px 12px #cfd0d2, -6px -6px 12px #ffffff;
  @media screen and (max-width: 480px) {
    padding: 1.5em;
  }
}
</style>