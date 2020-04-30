import React from 'react';
import styled from '@emotion/styled';
import { COLORS } from '@/shared/theme';
import SEOMeta, { SEOMetaProps } from '@/components/SEOMeta';

const PageHeader = styled.h1`
  border-bottom: 1px solid ${COLORS.GREY[1]};
`;

interface BasicLayoutProps {
  title?: string;
  children: React.ReactNode;
  meta?: SEOMetaProps;
}

const BasicLayout = ({ title, children, meta, ...rest }: BasicLayoutProps) => {
  return (
    <div {...rest}>
      <SEOMeta {...meta} />
      {title && <PageHeader data-testid="basic-layout__title">{title}</PageHeader>}
      <div data-testid="basic-layout__content">{children}</div>
    </div>
  );
};

export default BasicLayout;
