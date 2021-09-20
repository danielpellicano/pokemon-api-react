import styled from "styled-components";

export const SearchBox = styled.header`
  position: relative;

  svg {
    position: absolute;
    right: 15px;
    top: 9px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchMobile = styled.button`
  width: 48px;
  height: 48px;
  background: #000;
  color: #fff;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  margin-right: 10px;
  border: 0;
  border-radius: 10px;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 468px) {
    width: 38px;
    height: 38px;
  }
`;

export const SearchScreenMobile = styled.div`
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  height: 82px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 99999;
  box-sizing: border-box;

  @media (max-width: 468px) {
    justify-content: flex-start;
    padding-left: 20px;
    input {
      width: 70% !important;
    }
  }
  svg {
    position: absolute;
    right: 20px;
    color: #fff;
    font-size: 28px;
    @media (max-width: 468px) {
      right: 30px;
    }
  }
`;
