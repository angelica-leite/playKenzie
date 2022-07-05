import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    width: 320px;
    height: 300px;
    margin: 10px;
  }

  button {
    padding: 10px;
    background-color: #1976d2;
    border: 1px solid #1976d2;
    border-radius: 4px;
    color: #f5f5f5;
  }
`;
