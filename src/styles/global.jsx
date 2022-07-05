import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline:0;
}
body{
    background-color: #f5f5f5;
    color: #312e38;
}
body input button {
    font-family: "Nunito", sans-serif;
    font-size:16px;
}
button{
    cursor:pointer;
}
a{
    text-decoration:none;
}
img{
    width:150px;
    height:150px
}

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

`;
