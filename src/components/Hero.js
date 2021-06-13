import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { breakAt, BreakpointSize } from './Breakpoints';

const Root = styled.div`
  color: #FFF;
  padding: 100px 0;

  ${(props) => css`
    background: url(${props.image}), rgba(0, 0 ,0, 0.4);
    background-position: center;
    background-size: cover;
    background-blend-mode: overlay;
  `}
`;

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${breakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${breakAt(BreakpointSize.lg)} {
    max-width: 1140px;
    padding: 0;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 2px;
`;

const Content = styled.div`
  p,
  li {
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
  }
`;

const Hero = ({ image, title, children }) => (
  <Root image={ image }>
    <Container>
      <Title>{ title }</Title>
      <Content>{ children }</Content>
    </Container>
  </Root>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  children: PropTypes.node,
}

export default Hero;
