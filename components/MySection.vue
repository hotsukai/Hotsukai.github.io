<template>
  <section>
    <h2 class="title is-4">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: "MySection",
  props: {
    title: String,
  },
};
</script>

<style lang="stylus" scoped>
section {
  margin: 4rem 0em;

  .title {
    margin-bottom: 2rem;
  }
}
</style>