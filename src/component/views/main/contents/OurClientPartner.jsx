import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { CustomerList } from "datas/constant";
import { HeadingItem } from "../MainViewElement";

// constant.js에서 정의된 고객 목록의 imageKey
const Clients = ["ssg", "skt", "kt", "ibk", "lotteTelecom"];

const OurClientPartner = () => {
  const { t } = useTranslation(["page"]);

  const getImgUrl = (key) => {
    const tmp = CustomerList.clients.filter((client) => {
      return client.imageKey === key;
    });
    if (tmp.length > 0) {
      return tmp[0].imgUrl;
    } else {
      return null;
    }
  };

  return (
    <StyledOurClientPartner className="sec04">
      <div className="cont">
        <HeadingItem
          title={t("page:main.section4.client.title")}
          description={t("page:main.section4.client.description")}
        />
        <ul className="client">
          {Clients.map((client, index) => (
            <li key={`main-client-${index}`}>
              <img src={getImgUrl(client)} alt={client} />
            </li>
          ))}
        </ul>
      </div>
    </StyledOurClientPartner>
  );
};

export default OurClientPartner;

const StyledOurClientPartner = styled.section`
  height: 573px;
  padding: ${({ theme }) => theme.toRem(100)} ${({ theme }) => theme.toRem(200)}
    ${({ theme }) => theme.toRem(80)};
  @media ${({ theme }) => theme.tablet} {
    height: 456px;
    padding: ${({ theme }) => theme.toRem(80)} ${({ theme }) => theme.toRem(60)};
  }
  @media ${({ theme }) => theme.mobile} {
    height: auto;
    padding: ${({ theme }) => theme.toMRem(70)}
      ${({ theme }) => theme.toMRem(30)};
  }

  .client {
    margin-top: ${({ theme }) => theme.toRem(80)};
    display: grid;
    align-items: center;
    grid-template-columns: repeat(5, minmax(20%, auto));
    @media ${({ theme }) => theme.tablet} {
      grid-template-columns: repeat(4, minmax(25%, auto));
    }
    @media ${({ theme }) => theme.mobile} {
      grid-template-columns: repeat(2, minmax(auto, 48%));
      gap: 1rem;
      li {
        text-align: center;
        img {
          width: 100%;
          height: auto;
        }
      }
    }

    li {
      font-size: 0;
      img {
        filter: grayscale(1);
      }
      @media ${({ theme }) => theme.tablet} {
        &:last-of-type {
          display: none;
        }
      }
    }
  }
`;
