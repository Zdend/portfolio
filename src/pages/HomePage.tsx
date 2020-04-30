import React from 'react';
import BasicLayout from '@/components/BasicLayout';
import { css } from '@emotion/core';
import { COLORS } from '@/shared/theme';

const homePageStyles = css`
  min-height: 100%;
  background-color: ${COLORS.PRIMARY[5]};
`;

export default () => {
  console.log(homePageStyles);
  return <BasicLayout css={homePageStyles}>
    <h1>Bla</h1>
   
  </BasicLayout>
};
