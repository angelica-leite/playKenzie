import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 10px;
  flex-wrap: wrap;
  img {
    width: 100px;
    height: 100px;
  }
  .cart {
    margin: 40px;
  }
  .resume {
    height: 300px;
    width: 24%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 16px;
    font-weight: bold;
    background-color: #d8f3ec;
    border-radius: 4px;
    margin: 50px;
  }

  button {
    padding: 10px;
    background-color: #1976d2;
    border: 1px solid #1976d2;
    border-radius: 4px;
    color: #f5f5f5;
  }
`;

export const Title = styled.h1`
  color: #66cb64;
`;
