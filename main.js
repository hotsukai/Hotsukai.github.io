const app = new Vue({
  el: "#app",
  data: {
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
  },
});
