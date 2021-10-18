import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 0.5rem;
  ul {
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: 1260px) {
      justify-content: flex-start;
      overflow-x: scroll;
      overflow-y: hidden;
      li  {
        margin-right: 20px;
        box-sizing: border-box;
      }
    }
  }
`;
