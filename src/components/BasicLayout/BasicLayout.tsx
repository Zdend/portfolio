import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from '@/shared/theme';

const PageHeader = styled.h1`
    border-bottom: 1px solid ${COLORS.GREY[1]};
`;

interface BasicLayoutProps {
    title: string;
    children: React.ReactNode;
}

const BasicLayout = ({ title, children }: BasicLayoutProps) => {
    return (
      <div>
          <PageHeader data-testid="basic-layout__title">{title}</PageHeader>
          <div data-testid="basic-layout__content">{children}</div>
      </div>
    );
};

export default BasicLayout;