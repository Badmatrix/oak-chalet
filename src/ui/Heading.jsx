import styled, {css} from "styled-components";

// const Heading = styled.h1`
//   font-size: 30px;
//   font-weight: 600;
//   background-color: #ffee00;
// `;
const Heading = styled.h1`
  ${(prop) =>
    prop.as === `h1` &&
    css`
      font-size: 3rem;
      font-weight: 600;
      `}
      ${(prop) =>
    prop.as === `h2` &&
    css`
      font-size: 2rem;
      font-weight: 600;
      
      `}
      ${(prop) =>
    prop.as === `h3` &&
    css`
      font-size: 20px;
      font-weight: 500;
      
    `}
    
    /* line-height: 1.4rem; */
`;

export default Heading;
