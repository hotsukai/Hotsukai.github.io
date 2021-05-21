<template>
  <div class="main">
    <h1 class="title is-3">
      開發 功太郎
      <br class="is-mobile" />(Kaihotsu Kotaro)
    </h1>
    <section-about-me />
    <section-contact />
    <section-products />
  </div>
</template>

<script>
import MyCard from "@/components/molecules/MyCard.vue";
import MySection from "@/components/molecules/MySection.vue";
import SectionAboutMe from "@/components/organisms/SectionAboutMe.vue";
import SectionContact from "@/components/organisms/SectionContact.vue";
import SectionProducts from "@/components/organisms/SectionProducts.vue";

export default {
  components: {
    MyCard,
    MySection,
    SectionAboutMe,
    SectionContact,
    SectionProducts,
  },
};
</script>

<style lang="stylus">
body {
  background-color: #f4f5f7;
  font-size: 16px;
  font-family: 'M PLUS 1p', sans-serif !important;

  .main {
    padding: 8em 12em;

    @media screen and (min-width: 1300px) {
      padding-right: 20%;
      padding-left: 20%;
    }

    @media screen and (max-width: 800px) {
      padding: 4em 8em;
    }

    @media screen and (max-width: 600px) {
      padding: 4em;
    }

    @media screen and (max-width: 480px) {
      padding: 3rem 2em;
    }

    a {
      color: forestgreen;
    }

    ul {
      list-style: none;
    }

    dd {
      margin-left: 3.5em;
      overflow-wrap: break-word;
    }

    .is-mobile {
      display: none;

      @media screen and (max-width: 480px) {
        display: inline;
      }
    }
  }
}
</style>