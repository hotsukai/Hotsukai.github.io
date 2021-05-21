<template>
  <my-section :title="'About me'">
    <my-card>
      <div class="columns">
        <div class="column is-6 is-12-mobile">
          <img src="images/kaihotsu.jpg" id="mypic" />
        </div>
        <div class="column is-6 is-12-mobile">
          <p>2000年生まれ</p>
          <p>神奈川県出身</p>
          <p>筑波大学 情報学群 情報メディア創成学類 3年</p>
          <p>融合知能デザイン研究室</p>
          <a class="microtask repeat" href="//crowd4u.org">
            <img src="//crowd4u.org/img/crowd4u_banner364x93.png" />
          </a>
        </div>
      </div>
    </my-card>
  </my-section>
</template>

<script>
import MyCard from "@/components/molecules/MyCard.vue";
import MySection from "@/components/molecules/MySection.vue";
export default {
  components: { MyCard, MySection },
};
</script>

<style lang="stylus" scoped>
#mypic {
  max-height: 250px;
}
</style>