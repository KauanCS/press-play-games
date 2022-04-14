import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  border: 1px solid white;
  gap: 30px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.color.white};
  -webkit-box-shadow: 0px 10px 10px -5px rgba(0,0,0,.5);
  -moz-box-shadow: 0px 10px 10px -5px rgba(0,0,0,.5);
  box-shadow: 0px 10px 10px -5px rgba(0,0,0,.5);
`;

export const Title = styled.h1`
  color: #212121;
`;

export const Description = styled.p`
  text-align: center;
  color: #676767;
  font-weight: 500;
`;

export const EmailText = styled.p`
  display: inline;
  color: red;
`;

export const Image = styled.img`
  width: 100px;
  height: auto;
`;

export const TextResend = styled.p`
  color: black;
  text-align: center;
  color: #676767;
  font-size: 13px;
`;

export const ContainerResend = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #e6e6e6;
  padding: 20px;
`;
