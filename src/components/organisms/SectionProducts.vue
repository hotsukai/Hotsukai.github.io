<template>
  <my-section :title="'Products'">
    <div class="blocks columns is-desktop mt-5">
      <div
        class="column is-6 is-12-touch product-block-wrapper"
        :class="{ 'is-left': i % 2 == 0, 'is-right': i % 2 == 1 }"
        v-for="(product, i) in products"
        :key="'p-' + i"
      >
        <my-card class="product-block">
          <img v-if="product.imageSrc" v-lazy="product.imageSrc" class="img" />
          <div v-else class="no-image img">NO IMAGE</div>
          <h3 class="title is-5">
            {{ product.title }}
            <a v-if="product.link" :href="product.link" target="_blank">
              <span class="icon">
                <i class="fas fa-external-link-alt"></i>
              </span>
            </a>
            <a v-if="product.github" :href="product.github" target="_blank">
              <span class="icon">
                <i class="fab fa-github"></i>
              </span>
            </a>
            <br />
            <span class="is-size-7">{{ product.year }}</span>
            <span class="is-size-7" v-show="product.isTeam">(共同制作)</span>
          </h3>
          <p v-html="product.description"></p>
          <p class="tags mt-2">
            <span
              class="tag is-rounded"
              v-for="(tag, i) in product.langs"
              :key="'tag-' + i"
            >{{ tag }}</span>
          </p>
        </my-card>
      </div>
    </div>
  </my-section>
</template>

<script>
import MyCard from "@/components/molecules/MyCard.vue";
import MySection from "@/components/molecules/MySection.vue";
export default {
  components: {
    MyCard,
    MySection,
  },
  data() {
    return {
      products: [
        {
          title: "HigaCoffee Database",
          year: "2020/8-",
          description:
            "T-ACT発の筑波大学公認サークルHiga Coffeeのシステム。<br>データを活用することでその人にぴったりなコーヒーを抽出するお手伝いをする。<br>バックエンド・フロントエンド・PMを担当。",
          langs: ["Nuxt.js (TypeScript)", "Flask (Python)", "Firebase"],
          isTeam: true,
          imageSrc: "images/higa.jpg",
          github: "https://github.com/Hotsukai/HigaCoffeeDBFront",
          link: "https://higa-database.netlify.app/",
        },
        {
          title: "Hobeeeeee!!",
          year: "2020/10-2021/1",
          description: `<a href="https://enpit.coins.tsukuba.ac.jp/">enPiT-BizSysD x 筑波大学</a>で制作。新しい趣味を見つけたい・広めたい人の願望を叶えるWebサービス。好きそうな趣味をつながりから探せることによって、サークルの新歓のように趣味を見つける・広めることができる。
        <ul>
        <li style="margin:0.5rem 0;">2020年度 enPiT 筑波大学 成果発表会 優秀賞, 情報学群長特別表彰受賞。(<a href="https://speakerdeck.com/hotsukai/seeeeee-d-enpit-bizsysdxzhu-bo-da-xue-cheng-guo-fa-biao-hui">スライド</a>)</li>
        <li style="margin:0.5rem 0;">2020年度 enPiT ビジネスシステムデザイン分野ワークショップ プロダクト賞受賞。(<a href="https://speakerdeck.com/hotsukai/seeeeee-dtimu-2020nian-du-enpitbizinesusisutemudezainfen-ye-wakusiyotupu">スライド</a>)</li>
        <li style="margin:0.5rem 0;">AgilePBL祭りで発表(<a href="https://speakerdeck.com/hotsukai/seeeeee-d-agilepblji-rifa-biao-suraido">スライド</a>)</li>
        </ul>`,
          langs: ["Nuxt.js (JavaScript)", "Firebase"],
          isTeam: true,
          imageSrc: "images/hobeeeeee.jpg",
          github: "https://github.com/enpitut2020/Hobeeeeee",
          link: "https://hobeeeeee.netlify.app/",
        },
        {
          title: "ぷろぐらみんぐうぃっち",
          year: "2020/12-2021/1",
          description:
            "Unityで制作されたAndroidアプリ。<br>プログラミングが必修化される小学校で子どものスキルを定量的に評価できるかに疑問を持ち、小学生向けの競技プログラミングをテーマに設定した。<br>ランキングや問題取得などバックエンドとのインターフェイスを担当した。",
          langs: ["Unity (C#)", "Firebase", "Android"],
          isTeam: true,
          imageSrc: "images/programmingWitch.jpg",
          github: "",
          link: "",
        },
        {
          title: "StoreSpotWith!!",
          year: "2020/11",
          description:
            "インターンで制作したLINE Bot。<br>スラッシュコマンドを使うことで、トークルーム・グループごとに行きたいところリストを作成する事ができる。<br>LINE Botの特性を活かせるようにこのコンセプトを考えた。",
          langs: ["Rails (Ruby)"],
          isTeam: false,
          imageSrc: "",
          github: "https://github.com/Hotsukai/intern-line-bot",
          link: "",
        },
        {
          title: "ほんとも",
          year: "2020/9",
          description:
            "電子書籍の売上向上を目指しインターンで制作。<br/>アジャイル・スクラム手法を利用し開発。バックエンドとのインターフェイスを主に担当。",
          langs: ["Vue.js (JavaScript)", "Firebase"],
          isTeam: true,
          imageSrc: "images/hontomo.jpg",
          github: "https://github.com/teamA-hontomo/hontomo",
          link: "https://hontomo-pre.netlify.app",
        },
        {
          title: "PocketMentor",
          year: "2020/7",
          description: `<a href="https://enpit.coins.tsukuba.ac.jp/">enPiT</a>で制作。アジャイル・スクラム開発の手法を学んだ。<br>いつかやりたいことが溜まることを解決したい、ついついだらけちゃう人向けのモチベ支援アプリケーション。<br/>`,
          langs: ["Ruby", "Docker"],
          isTeam: true,
          imageSrc: "images/pocketMentor.jpg",
          github: "https://github.com/enpitut2020/PocketMentor",
          link: "https://twitter.com/MentorPocket",
        },
        {
          title: "RefriSuggester",
          year: "2020/7",
          description:
            "授業のハッカソンで制作。「冷蔵庫にあるもので作れるものを知りたい」がコンセプトのLINE Bot。<br/>企画・APIからのデータ取得・LINEリッチメッセージ整形などを担当",
          langs: ["Sinatra (Ruby)", "Firebase", "Elasticsearch"],
          isTeam: true,
          imageSrc: "",
          github: "https://github.com/twice-cooked-pork/chat-bot-server",
          link: "",
        },
        {
          title: "ShareTsukuba",
          year: "2020/6",
          description:
            "Railsチュートリアルをベースに、Dockerを利用しオリジナルのアプリケーションを作成した。<br/>お店をフォルダにまとめてシェアすることができる。",
          langs: ["Rails(Ruby)", "Docker"],
          isTeam: false,
          imageSrc: "images/shareTsukuba.jpg",
          github: "https://github.com/Hotsukai/share_tsukuba",
          link: "https://share-tsukuba.herokuapp.com/",
        },
        {
          title: "筑波大学宿舎祭公式サイト",
          year: "2020/3-2020/4",
          description:
            "第46回筑波大学宿舎祭(やどかり祭)の広報のため制作。<br>PM・コーダーを担当。<br>また同委員会に情報系の組織を立ち上げ、DX化の推進・組織の技術力の向上を図った。",
          langs: ["HTML", "CSS", "jQuery"],
          isTeam: true,
          imageSrc: "/images/yado.jpg",
          github: "",
          link: "https://www.yadosai.com/",
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.blocks {
  justify-content: space-around;
  flex-wrap: wrap;

  &.columns {
    margin-left: 0;
    margin-right: 0;
  }

  .product-block-wrapper {
    padding: 0em 0em 4em 0em;

    .product-block {
      padding: 2em 3em;
      height: 100%;

      @media screen and (max-width: 480px) {
        padding: 1.5em;
      }

      .img {
        margin-bottom: 1.5rem;
        border-radius: 0.6rem;
      }

      .no-image {
        width: 100%;
        height: 10rem;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .icon {
        margin-left: 0.25rem;
        transition: all 0.2s ease;
        letter-spacing: 0.025em;
        font-size: 1rem;
        border-color: #d1d9e6;
        box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
        border-radius: 2rem;

        &:hover {
          box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
          background-color: transparent;
          border-color: #d1d9e6;
        }
      }

      .tag {
        box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff;
        background-color: transparent;
      }
    }

    @media screen and (min-width: 1024px) {
      &.is-right {
        padding-left: 2em;
        padding-right: 0em;
      }

      &.is-left {
        padding-left: 0em;
        padding-right: 2em;
      }
    }
  }
}
</style>