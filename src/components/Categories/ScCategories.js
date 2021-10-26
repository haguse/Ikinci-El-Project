import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1.6rem;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 6px;
  ul {
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: 1040px) {
      justify-content: flex-start;
      overflow-x: scroll;
      overflow-y: hidden;
      li  {
        margin-right: 20px;
        box-sizing: border-box;
      }
    }
    @media only screen and (max-width: 600px) {
      li {
        font-size: small;
      }
    }
  }

  .active {
    color: #4b9ce2;
    font-weight: bold;
    border-bottom: 1px solid #4b9ce2;
    padding-bottom: 3px;
  }
`;
