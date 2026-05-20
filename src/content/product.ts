// QuickCRM 製品情報 — 出典: 公式サイト https://quickcrm.site/ および
// `00_QuickCRM_機能概要.pptx` (slide 1–6)。
// 本ファイルに無い記述は出典が確認できないため追加しないこと。

// ─── 会社情報 ──────────────────────────────────────────────
export const company = {
  name: "株式会社MITシステム研究所",
  nameEn: "MIT System Research Institute Co.,Ltd.",
  series: "MIT の Quick シリーズ",
  zip: "100-0011",
  address: "東京都千代田区内幸町1-1-1 帝国ホテルタワー11F",
  phone: "03-6891-1010",
  fax: "03-6891-1112",
  copyright:
    "Copyright © MITのQuickシリーズ, 2020 All Rights Reserved.",
} as const;

// ─── 製品キャッチ & 概要 ───────────────────────────────────
// 出典: 公式サイト + PPT slide 1–3
export const product = {
  name: "QuickCRM",
  series: "MIT の Quick シリーズ",
  category: "クラウドサービス",
  // 公式サイト H1 (verbatim)
  heroH1:
    "コンタクトセンターに簡単に導入できる CRM システム。カスタマイズも自分でできます。",
  // 公式サイトサブ + PPT slide 3 を統合 (公式表現を尊重)
  heroSub:
    "10 年以上コンタクトセンター向け CRM を提供してきたノウハウを結集。エントリーモデルから高機能モデルまでシームレスにご利用頂けます。必要な機能を、必要な時に、必要な数だけ契約することもできます。",
  // PPT slide 3
  productLead:
    "QuickCRM は、コンタクトセンターの業務を包括的にサポートする CRM アプリケーションです。",
  productHighlights: [
    "インバウンド／アウトバウンド両方に対応",
    "見て分かりやすい豊富な管理機能",
    "自由に構築して操作性を追求できるカスタマイズ性",
    "SMS・メールなどマルチチャネル対応",
  ],
  // PPT slide 2
  buildSelfHeadline:
    "お客様が考える「最も業務がしやすい環境」を、お客様ご自身で構築可能です。",
  buildSelfSub:
    "初心者からパワーユーザーまで、画面作成・機能実装・テスト修正の全てをお客様ご自身で行えます。",
  buildSelfAxes: [
    {
      key: "layout",
      title: "レイアウトの高い自由度",
      desc: "オブジェクトの配置とサイズを画面上で自在に組み立て、業務にフィットする UI を実現します。",
    },
    {
      key: "ui",
      title: "直観的な操作性の UI",
      desc: "ドラッグ＆ドロップ中心の編集体験で、専門知識がなくても画面を完成させられます。",
    },
    {
      key: "logic",
      title: "高機能な連携処理機能",
      desc: "トリガーとアクションを組み合わせ、ノーコードで複雑な業務ロジックを定義できます。",
    },
  ],
} as const;

// ─── 3 つの強み (PPT slide 3) ────────────────────────────────
export const strengths = [
  {
    no: "01",
    title: "豊富な利用形態",
    body: "クラウド上でのサービス提供のため、豊富なオプション機能の中から、必要な機能だけを必要な分だけ利用できます。短期間かつ低コストで導入可能です。",
  },
  {
    no: "02",
    title: "柔軟な開発手法",
    body: "オペレーターが実際に操作して、使い勝手を確認しながら仕様を決められます。また、テンプレートベースの開発や Excel ファイルを用いた開発手法も選択可能です。",
  },
  {
    no: "03",
    title: "手軽に導入可能",
    body: "自社開発製品のためクラウドとオンプレミスにも対応しています。また、PBX に依存しない設計のため様々な PBX との接続実績があり、お客様ご希望の環境に柔軟に対応することが可能です。",
  },
] as const;

// ─── システム構成 (公式サイト「構成機能」) ────────────────────
export const systemArchitecture = {
  intro:
    "QuickCRM クラウドサービスは、CRM・データベース・CTI・オプションの 4 要素で構成されます。クラウドとオンプレミス、AWS と SoftBank、設置型 PBX とクラウド PBX を組み合わせ、お客様の環境にフィットする構成を選択できます。",
  blocks: [
    {
      key: "crm",
      title: "CRM (顧客情報管理) ソフトウェア",
      body: "高機能な CRM をクラウド環境で提供。あらゆる規模のコールセンターに対応する 3 つの Edition を用意し、専門知識がなくてもニーズにフィットした CRM を構築できます。",
    },
    {
      key: "db",
      title: "データベース環境",
      body: "基本、お客様のデータベースは弊社が提供するクラウド環境 (AWS または SoftBank) 上に設置しますが、お客様環境に設置することも可能です。セキュリティポリシー等で、データベースを外部に設置できない場合に有効です。VPN 回線を使用して、プライベートネットワーク環境・専用線接続環境での利用も可能です。",
    },
    {
      key: "cti",
      title: "豊富な電話系サービス (CTI) との接続",
      body: "クラウド系・設置型双方の PBX と接続実績があります。PBX に依存しない設計のため、お客様ご希望の電話環境を活かして導入できます。",
    },
    {
      key: "options",
      title: "豊富なオプション機能",
      body: "コミュニケーションツール、レポート作成、タブレット端末、アウトバウンド機能などをオプションで提供。必要な機能を必要な時だけ追加できます。",
    },
  ],
} as const;

// ─── CTI 連携実績 (公式サイト) ───────────────────────────────
export const ctiPartners = {
  cloud: [
    "Avaya 系",
    "SoftBank",
    "Amazon Connect",
    "CT-E1",
    "mPBX",
  ],
  onPremise: [
    "Avaya",
    "AspireUX",
    "CTstage",
    "SV9000",
    "CIC",
  ],
  note: "PBX に依存しない設計のため、上記以外の PBX との接続も柔軟に対応可能です。",
} as const;

// ─── オプション機能 (公式サイト) ─────────────────────────────
export const options = [
  { key: "sms", name: "SMS 送信" },
  { key: "mail", name: "メール送受信" },
  { key: "line", name: "LINE 送受信" },
  { key: "chat", name: "センター内チャット" },
  { key: "notice", name: "センター内周知" },
  { key: "report", name: "レポート作成" },
  { key: "tablet", name: "タブレット端末" },
  { key: "outbound", name: "アウトバウンド" },
] as const;

// ─── テンプレート 3 ステップ (公式サイト) ────────────────────
export const templateFlow = {
  intro:
    "あらかじめ用意されているテンプレートを利用して、たったの 3 ステップで、誰でも簡単に自分仕様のオリジナル画面を作ることができます。",
  steps: [
    {
      no: "01",
      title: "アプリケーションテンプレートから選択",
      body: "業務カテゴリ別に用意されたアプリケーションテンプレートから、業務に最も近いものを選択します。",
    },
    {
      no: "02",
      title: "機能枠テンプレートから選択",
      body: "「案件業務用業務機能枠」「受注業務用業務機能枠」などの機能枠テンプレートを選び、画面の骨格を決めます。",
    },
    {
      no: "03",
      title: "基本オブジェクトを使用して画面を作成",
      body: "機能枠とは別に、入力したい項目 (入力領域・プルダウン・チェックボックス等) を使用して画面を完成させます。テスト実行によって動作を確認して業務登録を行い、実運用になります。",
    },
  ],
  appTemplates: [
    "案件処理",
    "スケジュール処理",
    "アウトバウンド",
    "受注処理",
  ],
  frameTemplates: ["案件業務用業務機能枠", "受注業務用業務機能枠"],
} as const;

// ─── トリガー / アクション (PPT slide 4) ─────────────────────
// 「ノーコードで多様な操作を実現できる機能」
export const noCode = {
  intro:
    "ノーコードで多様な操作を実現できる機能を揃えています。画面上のイベント (トリガー) と処理 (アクション) を組み合わせるだけで、複雑な業務ロジックを定義できます。",
  triggers: [
    "Enter キー押下",
    "ロストフォーカス",
    "プルダウン選択",
    "チェックボックス選択",
    "ラジオボタン選択",
    "値変更",
    "ボタン押下",
    "画面表示",
  ],
  actions: [
    "ランダム機能",
    "数字チェック",
    "テーブル参照／値表示",
    "シーケンス発行",
    "位置／サイズ変更",
    "文字列の結合／分割／抽出／置換",
    "エラーチェック",
    "表示／非表示",
    "編集可／不可",
    "コピー",
    "複数情報差込み",
    "四則演算",
    "ポップアップ表示",
    "文字／バイト数取得",
    "ストップウォッチ",
    "タイマー",
  ],
} as const;

// ─── 業務画面作成機能 (PPT slide 5) ──────────────────────────
export type ScreenMethod = {
  key: string;
  no: string;
  title: string;
  desc: string;
  steps: readonly string[];
  triggers?: readonly string[];
  actions?: readonly string[];
  templates?: readonly string[];
  features: readonly string[];
};

export const screenBuilder: {
  title: string;
  lead: string;
  methods: readonly ScreenMethod[];
} = {
  title: "業務画面作成機能",
  lead: "QuickCRM では、業務にフィットする画面を 3 通りの手法で作成できます。お客様の自由度や開発スピードに合わせて、最適なアプローチを選択してください。",
  methods: [
    {
      key: "freeform",
      no: "01",
      title: "自由度の高い画面作成",
      desc: "オブジェクトを画面に配置していくことで CRM 画面を作成します。配置 → 設定 → 連携処理の 3 ステップで、業務に必要な動きを画面上に組み込みます。",
      steps: ["①オブジェクトの配置", "②オブジェクトの設定", "③連携処理設定"],
      triggers: ["入力領域", "ボタンの押下", "チェックボックス ON"],
      actions: [
        "表示の変更／色の変更",
        "値のセット／計算処理",
        "コピー",
        "繰り返し",
      ],
      features: [
        "お客様ご自身でも画面作成／編集が可能",
        "業務内容に合わせた画面作り",
        "高いカスタマイズ性",
      ],
    },
    {
      key: "template",
      no: "02",
      title: "テンプレートを用いた画面作成",
      desc: "案件処理・アウトバウンド・スケジュール処理・受注処理など、業務カテゴリ別のテンプレートを選び、画面上で微調整するだけで運用を開始できます。",
      steps: ["①テンプレートを選択", "②画面上で調整"],
      templates: [
        "案件処理",
        "アウトバウンド",
        "スケジュール処理",
        "受注処理",
      ],
      features: [
        "短期間での導入が可能",
        "導入コスト削減",
        "お客様の業務に合わせて項目の追加・編集が可能",
      ],
    },
    {
      key: "excel",
      no: "03",
      title: "Excel を用いた画面作成",
      desc: "画面設計書 (Excel) を作成し、読み込ませて画面上で調整するだけで作成できます。仕様変更が頻繁に発生する業務に向きます。",
      steps: [
        "①画面設計書 (Excel) の作成",
        "②読込",
        "③画面上で調整",
      ],
      features: [
        "頻繁な仕様変更に柔軟に対応",
        "複雑なカスタマイズに対応",
        "メンテナンスが容易",
      ],
    },
  ],
};

// ─── 管理機能 (PPT slide 6) ──────────────────────────────────
export type ManagementItem = { name: string; subs?: readonly string[] };
export type ManagementGroup = {
  key: string;
  title: string;
  summary: string;
  items: readonly ManagementItem[];
  note?: string;
};

export const management: {
  title: string;
  lead: string;
  groups: readonly ManagementGroup[];
} = {
  title: "管理機能",
  lead: "アウトバウンド、データ、レポート、コミュニケーション、通話録音。コンタクトセンターの運用に必要な機能群を、必要な分だけ組み合わせて提供します。",
  groups: [
    {
      key: "outbound",
      title: "アウトバウンド機能",
      summary:
        "コールリストの作成・分配から、自動架電・再架電予約・架電結果登録まで、アウトバウンド業務の中核を網羅します。",
      items: [
        {
          name: "コールリスト管理機能",
          subs: ["作成処理", "分配処理"],
        },
        { name: "CTI 連携", subs: ["リスト検索", "フィルター機能"] },
        {
          name: "自動架電",
          subs: ["プレビュー発信", "プログレス発信", "プレディクティブ発信"],
        },
        { name: "再架電予約" },
        { name: "架電禁止登録" },
        { name: "架電結果登録" },
      ],
    },
    {
      key: "data",
      title: "データ管理機能",
      summary:
        "顧客データ・FAQ・更新データなどを、CSV／Excel 取込や画面上の直接編集で柔軟に管理。CSV や外部システム連携でのエクスポートにも対応します。",
      items: [
        {
          name: "データインポート機能",
          subs: [
            "CSV／Excel から取込",
            "画面上で直接編集",
            "テーブル作成",
            "テーブル編集",
          ],
        },
        {
          name: "データエクスポート機能",
          subs: [
            "CSV 出力",
            "外部システム連携",
            "架電データ出力",
            "顧客データ出力",
          ],
        },
        { name: "テーブル管理機能" },
      ],
    },
    {
      key: "report",
      title: "多様なレポート機能",
      summary:
        "オペレーター別／業務別／時間帯別の架電結果に加え、ヒストリカル・リアルタイム双方のレポートで運用を可視化します。",
      items: [
        {
          name: "架電結果表示機能",
          subs: ["オペレーター別", "業務別", "時間帯別"],
        },
        { name: "ヒストリカルレポート" },
        { name: "リアルタイムレポート" },
      ],
    },
    {
      key: "comm",
      title: "コミュニケーション機能",
      summary:
        "メール・SMS の送受信、センター内チャット、シートマップなど、対顧客・対オペレーター双方のコミュニケーションを 1 画面で完結できます。",
      items: [
        { name: "メール送受信／SMS 送信" },
        { name: "センター内チャット" },
        { name: "シートマップ" },
      ],
    },
    {
      key: "record",
      title: "通話録音機能",
      summary:
        "外部の通話録音システムと連携し、録音データの参照・再生をオペレーター画面から行えます。",
      note: "※通話録音システムとの連携が条件です。",
      items: [{ name: "通話録音システムと連携した録音・再生" }],
    },
  ],
};

// ─── 3 つの Edition (公式サイト言及あり、具体名は要確認のため暫定) ──
export type Edition = {
  tier: string;
  headline: string;
  body: string;
  scale: string;
  featured?: boolean;
};

export const editions: {
  intro: string;
  note: string;
  items: readonly Edition[];
} = {
  intro:
    "あらゆる規模のコールセンターに対応する 3 つの Edition をご用意。拡張性の高いオプション機能を組み合わせることで、専門知識がなくても、あなたのニーズにベストフィットした CRM を構築することができます。",
  note: "※エディションの正式名称・含有機能はお問い合わせ時にご案内します。",
  items: [
    {
      tier: "Entry",
      headline: "小規模センター向け",
      body: "短期間・低コストで導入できるエントリーモデル。必要最小限の CRM 機能と基本的な管理機能を提供します。",
      scale: "〜30 席",
    },
    {
      tier: "Standard",
      headline: "中規模・複合運用向け",
      body: "インバウンド／アウトバウンド両対応に加え、レポート・データ管理・コミュニケーション系オプションを組み合わせて運用を最適化できます。",
      scale: "30〜100 席",
      featured: true,
    },
    {
      tier: "Advanced",
      headline: "大規模・カスタム運用向け",
      body: "豊富な CTI 接続実績と、Excel・自由配置・テンプレートを併用した高度なカスタマイズに対応する高機能モデル。",
      scale: "100 席〜",
    },
  ],
};

// ─── 動画コンテンツ (公式サイト「動画で見る QuickCRM」) ────
export const videoBoard = {
  eyebrow: "動画で見る QuickCRM",
  title: "オペレーターが実際に操作する画面を、映像で。",
  body: "テンプレート選択から画面オブジェクトの配置、テスト実行までの一連の流れを、実際の操作映像でご紹介します。",
  duration: "約 5 分",
  poster:
    "実際のオペレーター画面 (案件処理テンプレート) で、入力・連携・自動架電を一気通貫で確認できます。",
} as const;

// ─── 経験年数バッジ (公式サイト「10年以上のノウハウ」) ─────
export const expertise = {
  years: 10,
  label: "10 年以上のノウハウを結集",
  body: "コンタクトセンター向け CRM を 10 年以上にわたって提供し、業務に必要な機能・運用フロー・接続実績を蓄積してきました。",
  pillars: [
    {
      key: "scale",
      title: "エントリー〜高機能までシームレス",
      body: "Entry / Standard / Advanced の 3 Edition と豊富なオプションで、規模に合わせて拡張できます。",
    },
    {
      key: "modular",
      title: "必要な機能を、必要な時に、必要な数だけ",
      body: "クラウドサービスならではの柔軟な契約形態で、コール数や席数の増減に追従できます。",
    },
    {
      key: "pbx",
      title: "PBX 非依存・クラウドもオンプレも",
      body: "AWS / SoftBank クラウドや VPN・専用線、設置型 PBX との豊富な接続実績で、お客様の環境に合わせます。",
    },
  ],
} as const;

// ─── サンプル一覧 ──────────────────────────────────────────
export const samples = [
  {
    key: "a",
    href: "/sample-a",
    label: "Sample A",
    concept: "Organic Forest",
    tagline: "緑とぬくもりで、業務に寄り添う。",
    description:
      "緑と水彩の有機的なトーンで、コンタクトセンター CRM を編集デザインに近い体裁で見せます。",
    accent: "#2D6A4F",
  },
  {
    key: "b",
    href: "/sample-b",
    label: "Sample B",
    concept: "Neo Mint Glass",
    tagline: "ダーク UI で、運用の先進性を伝える。",
    description:
      "ダークモードのモニタートーンとガラスのレイヤで、CTI・自動架電・リアルタイムレポートの先進性を表現します。",
    accent: "#5EEAD4",
  },
  {
    key: "c",
    href: "/sample-c",
    label: "Sample C",
    concept: "Editorial Botanical",
    tagline: "雑誌のように読む、コンタクトセンターの CRM。",
    description:
      "編集デザインの構造と余白で、機能ひとつひとつの輪郭を丁寧に読ませるサンプルです。",
    accent: "#2F5233",
  },
] as const;
