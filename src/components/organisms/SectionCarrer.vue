<template>
  <my-section title="Carrer">
    <my-card>
      <dl class="mb-5">
        <dt>
          <p class="title is-5 mb-3">
            <span class="icon mr-2">
              <i class="fas fa-map-marker-alt"></i> 
            </span>
            学歴
          </p>
        </dt>
        <dd>
          <ul>
            <li
              v-for="education in educations"
              :key="education.name"
              class="mb-4"
            >
              <p v-html="education.name" class="title is-6 mb-0"></p>
              <p class="is-size-7">{{ education.season }}</p>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>
          <p class="title is-5 mb-3">
            <span class="icon"> <i class="fas fa-map-marker-alt"></i> </span>
            職歴
          </p>
        </dt>
        <dd>
          <ul>
            <li v-for="workHistory in workHistories" :key="workHistory.name" class="mb-4">
              <p class="title is-6 mb-0">
                {{ workHistory.name }}
              </p>
              <span class="is-size-7">{{ workHistory.season }}</span>
              <p class="is-size-6">{{ workHistory.description }}</p>
            </li>
          </ul>
        </dd>
      </dl>
      <dl>
        <dt>
          <p class="title is-5 mb-3">
            <span class="icon"> <i class="fas fa-map-marker-alt"></i> </span>
            インターン
          </p>
        </dt>
        <dd>
          <ul>
            <li v-for="intern in interns" :key="intern.name" class="mb-4">
              <p class="title is-6 mb-0">
                {{ intern.name }}
              </p>
              <span class="is-size-7">{{ intern.season }}</span>
              <p class="is-size-6">{{ intern.description }}</p>
            </li>
          </ul>
        </dd>
      </dl>
    </my-card>
  </my-section>
</template>

<script>
import MyCard from "@/components/molecules/MyCard.vue";
import MySection from "@/components/molecules/MySection.vue";
export default {
  components: { MyCard, MySection },
  name: "SectionContact",
  data: () => {
    return {
      educations: [
        {
          season: "2018/04 -",
          name: "筑波大学 情報学群<wbr /> 情報メディア創成学類",
        },
        { season: "2015/04 - 2018/03", name: "桐蔭学園高等学校 理数科" },
      ],
      workHistories:[
        { name: "DiningX, Inc.", season: "2021/9 - ", description: "スクラムマスター・エンジニアとして新規プロダクトの立ち上げ・価値検証を行っている．" },

      ],
      interns: [
        { name: "CAM, Inc. ( CyberAgent group )", season: "2022/1 - ", description: "" },
        { name: "Wantedly, Inc.", season: "2021/9", description: "Reactを用いた開発. Wantedly PalseのUX向上のための実装など" },
        {
          name: "Nyle Inc.",
          season: "2020/10 - 2021/12",
          description:
            "社内ツールの開発, Gatsby.jsを用いた「おトクにマイカー 定額カルモくん」の開発, プロコン運営など",
        },
        {
          name: "Giftee, Inc.",
          season: "2020/11",
          description: "Ruby on Railsを用いてLINE Botを制作",
        },
        {
          name: "MEDIA DO Co., Ltd.",
          season: "2020/9",
          description:
            "ハッカソン形式でチーム開発を行った. スクラム, Vue.js等を利用",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
dd {
  margin-left: 2rem;
}
</style>
