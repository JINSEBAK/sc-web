import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { TECH_ICON_LIST } from "../../../../datas/constant";
import IconButton from "../../../common/IconButton";

const TechIconList = (props) => {
  const [iconList, setIconList] = useState([]);

  useEffect(() => {
    const getRandomArray = () => {
      let randomArr = [];
      for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 6 + 1);
        if (randomArr.indexOf(randomNum) === -1) {
          randomArr.push(randomNum);
        } else i--;
      }
      const temp = randomArr.map((randomNum) => {
        return TECH_ICON_LIST.find((icon) => icon.index === randomNum);
      });
      setIconList(temp);
    };
    getRandomArray();
  }, []);

  return (
    <StyledTechIconList {...props}>
      {iconList.length > 0 &&
        iconList.map((tech, idx) => {
          return (
            <div key={`${tech.name}-${idx}`}>
              <IconButton name={tech.name} large />
            </div>
          );
        })}
    </StyledTechIconList>
  );
};

export default TechIconList;

const StyledTechIconList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: no-wrap;
  gap: 1rem;
  margin-top: ${({ theme }) => theme.toRem(24)};
  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: ${(props) =>
      props.large ? `100px` : props.middle ? "80px" : "60px"};
    height: ${(props) =>
      props.large ? `100px` : props.middle ? "80px" : "60px"};
    border: 1px solid #d5d5d5;
    border-radius: 50%;
    ${(props) => {
      if (props.main) {
        return css`
          border: none;
          background-color: rgba(255, 255, 255, 0.1);
        `;
      }
    }}
  }
  img {
    width: 100%;
    height: 100%;
  }
  button {
    cursor: default;
  }

  @media ${({ theme }) => theme.tablet} {
    gap: 14px;
    div {
      &:last-of-type {
        display: none;
      }
    }
  }

  @media ${({ theme }) => theme.mobile} {
    display: grid;
    grid-gap: 30px;
    gap: 30px;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    max-width: 80%;
    margin-left: auto;
    margin-right: auto;
    > div {
      width: 60px;
      height: 60px;
      &:last-of-type {
        display: block;
      }
    }
  }
`;
