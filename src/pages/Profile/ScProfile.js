import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem 7rem;
  background-color: #f2f2f2;
  min-height: 100vh;
  color: #555555;

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
      cursor: pointer;

      border-bottom: 1px solid #e0e0e0;
      padding-top: 1px;

      & p:nth-child(2) {
        margin-left: 2rem;
      }
    }
    &__components {
      margin-top: 1rem;
    }

    .active {
      color: #4b9ce2;
      border-bottom: 1px solid #4b9ce2;
      padding-bottom: 5px;
      font-weight: bold;
    }
  }
`;
