import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { CustomerList } from "datas/constant";
import SectionTitle from "component/common/SectionTitle";

const AboutCustomer = () => {
  const { t } = useTranslation(["page"]);
  return (
    <StyledCustomer>
      <SectionTitle
        prevTitle={t(`page:about.client.prevTitle`)}
        title={t(`page:about.client.title`)}
      />
      <ul>
        {[...CustomerList.clients, ...CustomerList.partners]?.map((c, idx) => {
          return (
            <li className="icon" key={`${c.name}-${idx}`}>
              <img src={c.imgUrl} alt={c.name} />
            </li>
          );
        })}
      </ul>
    </StyledCustomer>
  );
};
export default AboutCustomer;

const StyledCustomer = styled.div`
  display: flex;
  justify-content: space-between;
  ul {
    flex: 1;
    display: grid;
    grid-gap: ${({ theme }) => theme.toRem(36)}
      ${({ theme }) => theme.toRem(46)};
    gap: ${({ theme }) => theme.toRem(36)} ${({ theme }) => theme.toRem(46)};
    grid-template-columns: repeat(auto-fill, minmax(184px, auto));
    margin: ${({ theme }) => theme.toRem(54)} 0 0
      ${({ theme }) => theme.toRem(54)};
    li {
      img {
        filter: grayscale(100%);
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  @media ${({ theme }) => theme.desktop} {
    ul {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media ${({ theme }) => theme.tablet} {
    width: 100%;
    ul {
      grid-gap: ${({ theme }) => theme.toRem(36)}
        ${({ theme }) => theme.toRem(26)};
      gap: ${({ theme }) => theme.toRem(36)} ${({ theme }) => theme.toRem(26)};
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
    }
  }
  @media ${({ theme }) => theme.mobile} {
    flex-direction: column;
    ul {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
      margin: 0;
    }
  }
  @media ${({ theme }) => theme.min} {
    ul {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
