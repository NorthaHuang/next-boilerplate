import styled from 'styled-components';

export default {
  Wrapper: styled.footer`
    border-top: 1px solid ${({ theme: { palette } }) => palette.common.black};
  `,
};
