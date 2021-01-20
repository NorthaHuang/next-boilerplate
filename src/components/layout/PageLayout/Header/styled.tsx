import styled from 'styled-components';

export default {
  Wrapper: styled.header`
    border-bottom: 1px solid ${({ theme: { palette } }) => palette.common.black};
  `,
};
