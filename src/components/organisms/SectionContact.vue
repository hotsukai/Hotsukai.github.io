<template>
  <my-section :title="'Contact'">
    <my-card>
      <address>
        <dl>
          <dt>
            <span class="icon">
              <i class="fas fa-envelope"></i>
            </span>
            Mail
          </dt>
          <dd>kotaro.kaihotsu.2021b@mlab.info</dd>
        </dl>
        <dl>
          <dt>
            <span class="icon">
              <i class="fas fa-map-marker-alt"></i>
            </span>
            研究室住所
          </dt>
          <dd>
            〒305-8550
            <br />つくば市春日１－２ 筑波大学 図書館情報メディア系
            <br />森嶋・松原・伊藤研究室
          </dd>
        </dl>
        <dl>
          <dt>
            <span>
              <i class="fas fa-phone"></i>
            </span>
            研究室電話番号
          </dt>
          <dd>029-859-1556</dd>
        </dl>
      </address>
    </my-card>
  </my-section>
</template>

<script>
import MyCard from "@/components/molecules/MyCard.vue";
import MySection from "@/components/molecules/MySection.vue";
export default {
  components: { MyCard, MySection },
  name: "SectionContact",
};
</script>

<style lang="stylus" scoped>
address {
  font-style: normal;
}
</style>