import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// TODO! SEO 대응

// responsive - media query
import { ThemeProvider } from "styled-components";
import theme from "./assets/theme/theme";

// locaization
import "./i18n";

// default style
import "./assets/css/style.css";
import CodeStore from "store/CodeStore";
import LanguageContainer from "store/LangaugeStore";
import GlobalStyle from "component/layout/GlobalStyle";

// const root = ReactDOM.createRoot(document.getElementById("root"));
const $root = document.getElementById("root");
const renderOrHydrate = $root.hasChildNodes() ? hydrate : render;

renderOrHydrate(
  <ThemeProvider theme={theme}>
    {/* React.StrictMode 는 오류 검출을 위해 CRA에서 제공함 
  디버깅 모드일 때만 동작, useEffect안 내용이 두번 실행 */}
    {/* <React.StrictMode> */}
    <GlobalStyle />
    <LanguageContainer>
      <CodeStore>
        <App />
      </CodeStore>
    </LanguageContainer>
    {/* </React.StrictMode> */}
  </ThemeProvider>,
  $root
);
// root.render(
//   <ThemeProvider theme={theme}>
//     {/* React.StrictMode 는 오류 검출을 위해 CRA에서 제공함
//     디버깅 모드일 때만 동작, useEffect안 내용이 두번 실행 */}
//     {/* <React.StrictMode> */}
//     <GlobalStyle />
//     <CodeStore>
//       <App />
//     </CodeStore>
//     {/* </React.StrictMode> */}
//   </ThemeProvider>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
