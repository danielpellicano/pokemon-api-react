import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  margin-bottom: 50px;
  border-bottom: 5px solid #00000012;

  @media (max-width: 468px) {
    margin-bottom: 0;
  }
`;

export const HeaderContainer = styled.header`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    width: 300px;
    padding: 10px;
    border-radius: 50px;
  }
`;
