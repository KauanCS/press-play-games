import styled from 'styled-components';
import { Pagination as AntPagination } from 'antd';

const urlBackground = 'https://pressplaygames.com.br/wp-content/uploads/2021/04/pressplaygames-1.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerGames = styled.div`
  display: flex;
  width: 100%;
  gap: 18px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

export const ContainerContent = styled.div`
  display: flex;
  width: 1000px;
  margin: 20px;
  flex-direction: column;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    width: 95%;
    align-items: center;
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    margin: 20px 0;
  }
`;

export const Pagination = styled(AntPagination)`
  && .ant-pagination-jump-prev 
  .ant-pagination-item-container 
  .ant-pagination-item-ellipsis, 
  .ant-pagination-jump-next 
  .ant-pagination-item-container 
  .ant-pagination-item-ellipsis {
    color: ${(props) => props.theme.color.white};
  }
`;

export const BackgroundImage = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-image: url(${urlBackground});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${(props) => props.theme.color.black};
  opacity: 0.6;
`;

export const TitleHeader = styled.h1`
  position: relative;
  color: ${(props) => props.theme.color.white};
  font-weight: 500;
  z-index: 1;
  font-size: 35px;
  padding: 40px 0;
  @media only screen and (min-device-width : 320px) and (max-device-width : 768px) {
    font-size: 34px;
  }
`;
