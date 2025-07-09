export const AdminNavigation = [
  {
    key: "works",
    title: "프로젝트 관리",
    path: "/admin/works/list",
    icon: null,
  },
  {
    key: "inquiry",
    title: "프로젝트 문의",
    path: "/admin/inquiry/list",
    icon: null,
  },
  {
    key: "account",
    title: "관리자 등록",
    path: "/admin/account/register",
    icon: null,
  },
];

export const AdminTitle = {
  work: {
    title: "프로젝트 관리",
    sub: "스마트코어 프로젝트를 관리할 수 있습니다.",
    breadcrumb: ["홈", "프로젝트 관리"],
  },
  inquiry: {
    title: "프로젝트 문의",
    sub: "프로젝트 문의 현황을 확인할 수 있습니다.",
    breadcrumb: ["홈", "프로젝트 문의"],
  },
  account: {
    title: "관리자 계정 추가",
    sub: "추가로 관리자 계정을 등록 할 수 있습니다.",
    breadcrumb: ["홈", "관리자 등록"],
  },
};

export const InquiryListHeader = [
  { key: 0, name: "index", title: "No.", sort: false },
  { key: 1, name: "regDts", title: "프로젝트 문의일", sort: true },
  { key: 2, name: "cmpNm", title: "회사명", sort: true },
  { key: 3, name: "inqDevelopCd", title: "프로젝트 형태", sort: false },
  { key: 4, name: "inqScdDts", title: "오픈 예정일", sort: true },
];

export const ProjectListHeader = [
  { key: 0, name: "index", title: "No.", sort: false },
  { key: 1, name: "workDts", title: "프로젝트 수행일", sort: true },
  { key: 2, name: "workNm", title: "프로젝트명", sort: true },
  { key: 3, name: "workCd", title: "구분", sort: false },
  { key: 4, name: "modDts", title: "최종수정일", sort: true },
  { key: 5, name: "modId", title: "최종수정자", sort: false },
];

export const FILE_MAX_SIZE = 10000000; // 10MB

export const PAGE_SIZE = 10;
