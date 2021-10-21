import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 7rem;
  background-color: #f2f2f2;
  color: #525252;
  min-height: 100vh;

  @media only screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 2rem 2rem;
  border-radius: 8px;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const Detail = styled.div`
  flex: 1;
  width: 100%;

  p {
    font-size: 1.56rem;
    font-weight: bold;
  }

  form {
    label {
      display: block;
      margin-top: 1rem;
    }

    .product__name {
      width: 100%;
    }
    .product__desc {
      width: 100%;
    }

    input {
      margin-top: 0.5rem;
      border: none;
      background-color: #f4f4f4;
      border-radius: 0.2rem;
      padding: 0.8rem 0 0.8rem 0.8rem;
    }
    textarea {
      margin-top: 0.5rem;
      background-color: #f4f4f4;
      border: none;
      border-radius: 0.2rem;
      padding: 0.8rem 0 0.8rem 0.8rem;
      resize: none;
    }

    .selects {
      display: flex;

      @media only screen and (max-width: 1000px) {
        flex-direction: column;
      }
      /* align-items: center; */
    }

    .select {
      display: flex;
      flex-direction: column;
      width: 100%;

      select {
        width: 100%;
        margin-top: 0.4rem;
        border: none;
        padding: 0.8rem 0.8rem;
        background-color: #f4f4f4;
        border-radius: 0.4rem;
      }
    }

    @media only screen and (min-width: 1000px) {
      .select:nth-child(odd) {
        margin-right: 1rem;
      }
      .select:nth-child(even) {
        margin-left: 1rem;
      }
    }

    .price {
      padding-right: 1rem;
      border-radius: 0.4rem;
    }

    .price::placeholder {
      text-align: right;
    }
  }

  .toggle-switch {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    & span {
      margin-right: 2rem;
    }
  }
`;
export const AddFile = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    p {
      margin-top: 1rem;
    }
  }
  .title {
    font-size: 1.56rem;
    font-weight: bold;
  }

  .add-file__wrapper {
    text-align: center;
    margin-top: 1rem;
    border: 2px dashed #b1b1b1;
    border-radius: 1rem;
    padding: 1rem 0;

    & input[type="file"] {
      display: none;
    }

    & span {
      color: #b1b1b1;
      display: inline-block;
      border: none;
      border-radius: 0.8rem;
      padding: 0.5rem 1rem;
      background-color: #f4f4f4;
      cursor: pointer;
      margin-top: 1rem;
    }

    &__text {
      color: #525252;
    }

    &__size {
      margin-top: 2rem;
      color: #b1b1b1;
      font-size: small;
    }
  }
`;

export const Line = styled.hr`
  color: rgba(82, 82, 82, 0.1);
  margin: 0 2rem 0 2rem;
  @media only screen and (max-width: 1000px) {
    margin: 2rem 0 1rem 0;
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  color: white;
  background-color: #4b9ce2;
  border: none;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  width: 50%;
  align-self: flex-end;

  @media only screen and (max-width: 1000px) {
    margin-top: 1rem;
    width: 100%;
  }
`;
