import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
  background-color: #99deca;
  width: 100vw;
  h2 {
    margin-left: 25px;
    background: linear-gradient(90deg, #66cb64 39.84%, #fff 29.25%);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }
  .btns {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  button {
    display: flex;
    align-items: center;
    background-color: #99deca;
    border: none;
    margin-right: 20px;
  }
`;
