import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 7rem;
  background-color: #f2f2f2;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }

  .profile__info {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 1rem 1rem;
    border-radius: 0.4rem;
    & div {
      font-size: 2rem;
      color: gray;
    }
    & p {
      margin-left: 2rem;
    }
  }

  .offers {
    margin-top: 1rem;
    background-color: white;
    padding: 1rem 1rem;
    border-radius: 0.4rem;

    &__titles {
      display: flex;
      color: #4b9ce2;
      cursor: pointer;

      & p:nth-child(2) {
        margin-left: 2rem;
      }
    }
    &__components {
      margin-top: 1rem;
    }
  }
`;