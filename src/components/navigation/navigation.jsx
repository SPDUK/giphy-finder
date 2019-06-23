import React from 'react';
import { StyledLink } from '../styles/styled-link';
import { StyledNav, StyledButton } from './navigation-styles';

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
      <StyledButton appearance="subtle">{title}</StyledButton>
    </StyledLink>
  ));
  return (
    <StyledNav>
      <a href="/">
        <h3>Giphy Finder</h3>
      </a>
      {links}
    </StyledNav>
  );
};

export default navigation;
