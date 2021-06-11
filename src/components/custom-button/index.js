import styled from 'styled-components';
import {
  Button as AntButton,
} from 'antd';

const Button = styled(AntButton).attrs((props) => ({
  fontSize: props.fontSize || props.theme.fontSize.button,
  type: 'primary',
}))`
`;

Button.Secondary = styled(Button).attrs((props) => ({
  fontSize: props.fontSize || props.theme.fontSize.button,
  type: '',
}))``;

Button.Danger = styled(Button).attrs((props) => ({
  fontSize: props.fontSize || props.theme.fontSize.button,
  danger: true,
}))``;

export default Button;
