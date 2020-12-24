import React from 'react';
import withAuth from '@Hocs/withAuth';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default withAuth(Layout);
