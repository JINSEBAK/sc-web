import styled from "styled-components";

const BreadCrumb = (props) => {
  const { paths } = props;
  return (
    <StyledBreadCrumb>
      {paths.length > 0 && (
        <ul>
          {paths.map((path, index) => (
            <li key={`bread-crumb-${index}`}>{path}</li>
          ))}
        </ul>
      )}
    </StyledBreadCrumb>
  );
};

export default BreadCrumb;

const StyledBreadCrumb = styled.ul`
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -1.2rem;
  ul {
    display: flex;
    font-size: 0.75rem;
    li {
      &::before {
        content: "/";
        opacity: 0.6;
        padding: 0 0.5rem;
      }
      &:first-of-type {
        &::before {
          content: none;
        }
      }
    }
  }
`;
