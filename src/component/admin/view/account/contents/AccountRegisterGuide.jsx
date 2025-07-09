import styled from "styled-components";

const AccountRegisterGuide = () => {
  return (
    <StyledGuild>
      <li>관리자 계정은 사내 IP 환경에서만 생성 가능합니다.</li>
      <li>
        관라자 계정 아이디는 smcore_&#123;사용자이름의 이니셜&#125;로
        작성합니다.
        <span className="italic">ex) smcore_psj</span>
      </li>
    </StyledGuild>
  );
};
export default AccountRegisterGuide;

const StyledGuild = styled.ul`
  margin-top: 1rem;
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
  color: #666;
  li {
    list-style: disc;
    span {
      display: block;
      margin-top: 0.25rem;
      &.italic {
        font-style: oblique;
      }
    }
  }
`;
