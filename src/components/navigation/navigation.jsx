import React from 'react';
import Button from '@atlaskit/button';
import { StyledLink } from '../styles/styled-link';

const pages = [
  {
    title: 'Search',
    path: '/'
  },
  {
    title: 'Trending',
    path: '/trending'
  },
  {
    title: 'Random',
    path: '/random'
  }
];

const navigation = () => {
  const links = pages.map(({ title, path }) => (
    <StyledLink key={path} to={path}>
      <Button appearance="primary">{title}</Button>
    </StyledLink>
  ));
  return <>{links}</>;
};

export default navigation;
