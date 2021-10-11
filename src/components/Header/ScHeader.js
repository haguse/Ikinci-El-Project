import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 7rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }

  @media only screen and (max-width: 465px) {
    & button {
      margin-top: 0.4rem;
    }
  }

  img {
    height: 3rem;
  }

  & button {
    margin-left: 1rem;
    border: none;
    padding: 0.6rem 1rem;
    cursor: pointer;
    color: #4b9ce2;
    background-color: #f0f8ff;
    border-radius: 0.3rem;
    min-width: 7.2rem;

    & div {
      display: flex;
      align-items: center;

      & span {
        margin-left: 0.5rem;
      }
    }
  }
`;
