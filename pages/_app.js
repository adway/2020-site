import React from 'react';
import App from 'next/app';
import { ThemeProvider, ColorMode, Container } from 'theme-ui';
import { Global } from '@emotion/core';

import theme, { root } from '../components/theme';
import Meta from '../components/meta';
import NProgress from '../components/nprogress';
import Nav from '../components/nav';
import Footer from '../components/footer';

class Root extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Meta />
        <ThemeProvider theme={theme}>
          <Container sx={{maxWidth: 'container'}}>
          <ColorMode />
          <Global styles={(theme) => ({ body: root(theme) })} />
          <NProgress color={theme.colors.primary} />
          <Nav />
          <Component {...pageProps} />
          <Footer />
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default Root;
