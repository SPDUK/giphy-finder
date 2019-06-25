import React from 'react';
import { StyledLink, StyledAnchor } from '../styles/styled-link';
import { StyledNav, StyledButton, StyledIconLink } from './navigation-styles';

const pages = [
  { title: 'Search', path: '/' },
  { title: 'Trending', path: '/trending' },
  { title: 'Random', path: '/random' }
];

const navigation = () => {
  const links = pages.map(({ title, path }) => (
    <StyledLink key={path} to={path}>
      <StyledButton appearance="subtle">{title}</StyledButton>
    </StyledLink>
  ));
  return (
    <StyledNav>
      <StyledIconLink to="/">
        <h3>Giphy Finder</h3>
      </StyledIconLink>
      {links}
      <aside>
        <StyledAnchor href="https://github.com/SPDUK/giphy-finder">
          <StyledButton appearance="primary">Github</StyledButton>
        </StyledAnchor>
      </aside>
    </StyledNav>
  );
};

export default navigation;
