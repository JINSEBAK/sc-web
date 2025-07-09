import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

*, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html, body {
        font-size: 16px;
        font-family: "Pretendard";
        padding: 0;
        margin: 0;
    }

    @media ${({ theme }) => theme.mobile} {
        html, body {
            font-size: 14px;
        }
    }
`;

export default GlobalStyle;
