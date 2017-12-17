import * as React from 'react';

import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

function PrimaryLayout({ children }: { children: JSX.Element }) {
  return (
    <div>
      <HeaderContainer />
      <main >
        {children}
      </main>
      <FooterContainer />
    </div>
  );
}

export default PrimaryLayout;
