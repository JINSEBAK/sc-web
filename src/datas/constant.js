export const GnbLink = {
  about: { code: "about", link: "/about" },
  tech: { code: "tech", link: "/tech" },
  projects: { code: "projects", link: "/projects" },
  contact: { code: "contact", link: "/contact" },
  inquiry: { code: "inquiry", link: "/inquiry" },
  application: { code: "recruit", link: "/recruit" }
};

export const GnbItems = [
  {
    title: "AI Solution",
    code: "",
    children: [{ title: "AI Solution", code: "", link: "/ai" }]
  },
  {
    title: "Bigdata",
    code: "",
    children: [
      {
        title: "Bigdata",
        code: "",
        link: "/bigData"
      }
    ]
  },
  {
    title: "Smart Fit System",
    code: "",
    children: [
      {
        title: "Smart Fit System",
        code: "",
        link: "/smart"
      }
    ]
  },
  {
    title: "제품",
    code: "",
    children: [
      { title: "AI PQC Solution", code: "", link: "/" },
      { title: "F@AI PQC Solution", code: "", link: "/" },
      { title: "F@AI BLOCKCHAIN Platform", code: "", link: "/" },
      { title: "AI MiDAS Solution", code: "", link: "/" },
      { title: "CAREON Solution", code: "", link: "/" },
      { title: "CHATA Solution", code: "", link: "/" }
    ]
  },
  {
    title: "회사소개",
    code: "",
    children: [{ title: "회사소개", code: "", link: "/ai" }]
  },
  {
    title: "채용정보",
    code: "",
    children: [{ title: "채용정보", code: "", link: "/ai" }]
  },
  {
    title: "고객지원",
    code: "",
    children: [{ title: "고객지원", code: "", link: "/ai" }]
  }
];

export const CompanyInfoKeys = [
  { key: "address", title: "" },
  { key: "tel", title: "T." },
  { key: "fax", title: "F." },
  { key: "email", title: "E-mail." }
];

export const TalentKeys = ["communication", "growth", "innovation", "passion"];

export const ProjectCategories = [
  { key: 0, value: 0, title: "All" },
  { key: 1, value: 1, title: "Service" },
  { key: 2, value: 2, title: "Fintech" },
  { key: 3, value: 3, title: "ioT" },
  { key: 4, value: 4, title: "Solution" }
];

export const AboutTriangleGraphic = [
  {
    key: 0,
    color: "rgba(41,201,38,0.8)",
    script: "tech01",
    zIndex: 4,
    width: 193,
    height: 137,
    top: "-30px",
    left: "140px"
  },

  {
    key: 1,
    color: "rgba(252,45,17,0.7)",
    script: "tech03",
    zIndex: 2,
    width: 193,
    height: 141,
    top: "50px",
    left: "277px"
  },
  {
    key: 2,
    color: "rgba(114,47,200,0.8)",
    script: "tech02",
    zIndex: 3,
    width: 289,
    height: 211,
    top: "20px",
    left: "30px"
  },
  {
    key: 3,
    color: "rgba(1,107,232,1)",
    script: "tech04",
    zIndex: 1,
    width: 474,
    height: 348,
    top: "0px",
    left: "0px"
  }
];

export const LNB_MENU = {
  about: [
    { key: 0, value: 0, title: "Info" },
    { key: 1, value: 1, title: "History" },
    { key: 2, value: 2, title: "Client" }
  ],
  tech: [
    { key: 0, value: 0, title: "AI" },
    { key: 1, value: 1, title: "Blockchain" },
    { key: 2, value: 2, title: "Fintech" },
    { key: 3, value: 3, title: "IoT" }
  ]
};

export const CustomerList = {
  clients: [
    {
      key: 0,
      name: "SSG.COM",
      imgUrl: require("assets/images/customers/ssg.png"),
      imageKey: "ssg"
    },
    {
      key: 1,
      name: "SK Telecom",
      imgUrl: require("assets/images/customers/skt.png"),
      imageKey: "skt"
    },
    {
      key: 2,
      name: "KT",
      imgUrl: require("assets/images/customers/kt.png"),
      imageKey: "kt"
    },
    {
      key: 3,
      name: "IBK기업은행",
      imgUrl: require("assets/images/customers/ibk.png"),
      imageKey: "ibk"
    },
    {
      key: 4,
      name: "SPC NETWORKS",
      imgUrl: require("assets/images/customers/spc.png"),
      imageKey: "spc"
    },
    {
      key: 5,
      name: "프루덴셜",
      imgUrl: require("assets/images/customers/prudential.png"),
      imageKey: "prudential"
    },
    {
      key: 6,
      name: "한화생명",
      imgUrl: require("assets/images/customers/hanwha.png"),
      imageKey: "hanwha"
    },
    {
      key: 7,
      name: "롯데정보통신",
      imgUrl: require("assets/images/customers/lotte-telecom.png"),
      imageKey: "lotteTelecom"
    },
    {
      key: 8,
      name: "롯데마트",
      imgUrl: require("assets/images/customers/lotteMart.png"),
      imageKey: "lotteMart"
    },
    {
      key: 9,
      name: "이마트",
      imgUrl: require("assets/images/customers/emart.png"),
      imageKey: "emart"
    },
    {
      key: 10,
      name: "현대엘리베이터",
      imgUrl: require("assets/images/customers/hundai.png"),
      imageKey: "hundai"
    },
    {
      key: 11,
      name: "한국타이어",
      imgUrl: require("assets/images/customers/hankook.png"),
      imageKey: "hankook"
    },
    {
      key: 12,
      name: "ETRI 한국전자통신연구원",
      imgUrl: require("assets/images/customers/etri.png"),
      imageKey: "etri"
    },
    {
      key: 13,
      name: "NICE정보통신",
      imgUrl: require("assets/images/customers/nice.png"),
      imageKey: "nice"
    },
    {
      key: 14,
      name: "전라북도도청",
      imgUrl: require("assets/images/customers/jeollabukdo.png"),
      imageKey: "jeollabukdo"
    },

    {
      key: 15,
      name: "행정안전부",
      imgUrl: require("assets/images/customers/administration.png"),
      imageKey: "administration"
    }
  ],
  partners: [
    {
      key: 0,
      name: "CELTIC-NEXT",
      imgUrl: require("assets/images/customers/celtic.png"),
      imageKey: "celtic"
    },
    {
      key: 1,
      name: "inosens",
      imgUrl: require("assets/images/customers/inosens.png"),
      imageKey: "inosens"
    },
    {
      key: 2,
      name: "samm teknologi",
      imgUrl: require("assets/images/customers/samm.png"),
      imageKey: "samm"
    },
    {
      key: 3,
      name: "TAV Technologies",
      imgUrl: require("assets/images/customers/tav.png"),
      imageKey: "tav"
    },
    {
      key: 4,
      name: "TORUN",
      imgUrl: require("assets/images/customers/torun.png"),
      imageKey: "torun"
    },
    {
      key: 5,
      name: "KocSistem",
      imgUrl: require("assets/images/customers/kocsistem.png"),
      imageKey: "kocsistem"
    },
    {
      key: 6,
      name: "instituto superior de Engenharia do Porto",
      imgUrl: require("assets/images/customers/isep.png"),
      imageKey: "isep"
    },
    {
      key: 7,
      name: "SisTrade",
      imgUrl: require("assets/images/customers/sistrade.png"),
      imageKey: "sistrade"
    },
    {
      key: 8,
      name: "Sidonios",
      imgUrl: require("assets/images/customers/sidonios.png"),
      imageKey: "sidonios"
    },
    {
      key: 9,
      name: "Beia",
      imgUrl: require("assets/images/customers/beia.png"),
      imageKey: "beia"
    },
    {
      key: 10,
      name: "한국외국어대학교",
      imgUrl: require("assets/images/customers/HankukUniversity.png"),
      imageKey: "HankukUniversity"
    },
    {
      key: 11,
      name: "(주)디엘정보기술",
      imgUrl: require("assets/images/customers/dlit.png"),
      imageKey: "dlit"
    },
    {
      key: 12,
      name: "고려대학교",
      imgUrl: require("assets/images/customers/koreaUniversity.png"),
      imageKey: "koreaUniversity"
    },
    {
      key: 13,
      name: "충남대학교",
      imgUrl: require("assets/images/customers/Chungnam.png"),
      imageKey: "Chungnam"
    }
  ]
};

export const CrewData = [
  {
    key: 0,
    title: "개발 인원",
    value: 60
  },
  { key: 1, title: "프로젝트 관리", value: 15 },
  { key: 2, title: "기획/디자인", value: 15 },
  { key: 3, title: "경영지원", value: 10 }
];

export const CrewTechnologies = [
  { key: 0, title: "App 개발", details: ["Java (안드로이드)", "Swift (iOS)"] },
  {
    key: 1,
    title: "웹 개발",
    details: [
      "HTML5",
      "JavaSpring",
      "NodeJS",
      "ReactJS",
      "CSS3",
      "Python",
      "반응형 웹"
    ]
  },
  {
    key: 2,
    title: "DB 개발",
    details: ["Oracle", "MSSQL", "MySQL", "Redis", "MongoDB"]
  },
  {
    key: 3,
    title: "기획/디자인",
    details: ["기능 분석", "스토리보드 기획", "Figma", "Zeplin"]
  }
];

export const TECH_ICON_LIST = [
  { name: "html", index: 1 },
  { name: "css", index: 2 },
  { name: "java", index: 3 },
  { name: "spring", index: 4 },
  { name: "react", index: 5 },
  { name: "node", index: 6 }
];

export const PROJECT_TERMS = [
  { key: 0, value: 0, text: "선택" },
  { key: 1, value: "1~2개월", text: "1~2개월" },
  { key: 2, value: "3~5개월", text: "3~5개월" },
  { key: 3, value: "6개월 이상", text: "6개월 이상" }
];

export const PROJECT_COST = [
  { key: 0, value: 0, text: "선택" },
  { key: 1, value: "3,000만원 미만", text: "3,000만원 미만" },
  { key: 2, value: "3,000만원~5,000만원", text: "3,000만원~5,000만원" },
  { key: 3, value: "5,000만원~1억원", text: "5,000만원~1억원" },
  { key: 4, value: "1억원~3억원", text: "1억원~3억원" },
  { key: 5, value: "3억원~5억원", text: "3억원~5억원" },
  { key: 6, value: "5억원이상", text: "5억원이상" }
];

/**
 * image path
 */

export const HISTORY_IMG_PATH = {
  0: require("assets/images/history/history_photo01.png"),
  1: require("assets/images/history/history_photo02.png"),
  2: require("assets/images/history/history_photo03.png"),
  3: require("assets/images/history/history_photo04.png"),
  4: require("assets/images/history/history_photo05.png"),
  5: require("assets/images/history/history_photo06.png"),
  6: require("assets/images/history/history_photo07.png")
};

export const BENEFIT_IMG_PATH = {
  0: require("assets/images/benefit/benefit_01.svg"),
  1: require("assets/images/benefit/benefit_02.svg"),
  2: require("assets/images/benefit/benefit_03.svg"),
  3: require("assets/images/benefit/benefit_04.svg"),
  4: require("assets/images/benefit/benefit_05.svg"),
  5: require("assets/images/benefit/benefit_06.svg"),
  6: require("assets/images/benefit/benefit_07.svg"),
  7: require("assets/images/benefit/benefit_08.svg"),
  8: require("assets/images/benefit/benefit_09.svg")
};

// TODO! 이미지에 한국어 사용 시 별도 구분 필요함
export const TECH_IMG_PATH = {
  // ko
  ai_0_ko: require("assets/images/technique/tech_ai_01.svg"),
  ai_0_ko_m: require("assets/images/technique/tech_ai_01_m.svg"),
  ai_1_ko: require("assets/images/technique/tech_ai_02.svg"),
  ai_1_ko_m: require("assets/images/technique/tech_ai_02_m.svg"),
  ai_2_ko: require("assets/images/technique/tech_ai_03_ko.svg"),
  ai_2_ko_m: require("assets/images/technique/tech_ai_03_ko_m.svg"),
  ai_3_ko: require("assets/images/technique/tech_ai_04_ko.svg"),
  ai_3_ko_m: require("assets/images/technique/tech_ai_04_ko_m.svg"),

  bc_0_ko: require("assets/images/technique/tech_blockchain_01_ko.svg"),
  bc_0_ko_m: require("assets/images/technique/tech_blockchain_01_ko_m.svg"),

  iot_ko: require("assets/images/technique/tech_iot_ko.svg"),
  iot_ko_m: require("assets/images/technique/tech_iot_ko_m.svg"),

  // en
  ai_0_en: require("assets/images/technique/tech_ai_01.svg"),
  ai_0_en_m: require("assets/images/technique/tech_ai_01_m.svg"),
  ai_1_en: require("assets/images/technique/tech_ai_02.svg"),
  ai_1_en_m: require("assets/images/technique/tech_ai_02_m.svg"),
  ai_2_en: require("assets/images/technique/tech_ai_03_ko.svg"),
  ai_2_en_m: require("assets/images/technique/tech_ai_03_ko_m.svg"),
  ai_3_en: require("assets/images/technique/tech_ai_04_en.svg"),
  ai_3_en_m: require("assets/images/technique/tech_ai_04_en_m.svg"),

  bc_0_en: require("assets/images/technique/tech_blockchain_01_en.svg"),
  bc_0_en_m: require("assets/images/technique/tech_blockchain_01_en_m.svg"),

  iot_en: require("assets/images/technique/tech_iot_en.svg"),
  iot_en_m: require("assets/images/technique/tech_iot_en_m.svg")
};
