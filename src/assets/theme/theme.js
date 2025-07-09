/**
 * styled-component 사용 시 미디어쿼리 한 곳에서 관리하기
 * 디자인에 따라 적절히 viewport 추가하면됨
 * css는 최종 스타일이 적용:
 * - 모바일first작업 시 min-width로 미디어쿼리 작업
 * - 데스크랍first작업 시 max-width로 미디어쿼리 작업
 */

// html, body default font-size: 16px 기준으로 rem 환산
// TODO! 모바일, 태블릿, PC기본 폰트 분리 필요 PC, 태블릿 16, 모바일 14?
const toRem = (size) => `${size / 16}rem`;
const toMRem = (size) => `${size / 14}rem`;

const fontSizes = {
  toRem: toRem(60),
};

export const fontSize = {
  mobile: 14,
  tablet: 14,
  desktop: 16,
};

export const mediaSizes = {
  min: "524px",
  mobile: "768px",
  tablet: "1024px",
  desktop: "1280px",
  wide: "1281px",
};

const colors = {
  mainColor: "#758cd5",
  secondaryColor: "#99abed",
  primaryColor: "#2B2B2F",
  borderColor: "#dadfe9",
  warningColor: "#E94162",
  pointColor: "#E94162",
  markerColor: "#ffe500",
  backgroundColor: "#fff",
  darkGrayColor: "#2b2b2f",
  adminMainColor: "#e4103b",
};

const common = {
  flexTop: `
    display: flex;
    justify-content: center;
    align-items: top
  `,
  flexVertical: `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  flexCenter: `
      display: flex;
      justify-content: center;
      align-items: center
  `,
  flexReverse: `
    display: flex;
    flex-direction: row-reverse;
  `,
};

const theme = {
  fontSizes,
  colors,
  common,
  toRem,
  toMRem,
  backgroundColor: "pink",
  min: `(max-width: ${mediaSizes.min})`,
  mobile: `(max-width: ${mediaSizes.mobile})`,
  tablet: `(max-width: ${mediaSizes.tablet})`,
  desktop: `(max-width: ${mediaSizes.desktop})`,
  wide: `(min-width: ${mediaSizes.wide})`,
};

export default theme;
