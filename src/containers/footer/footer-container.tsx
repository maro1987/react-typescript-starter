import * as React from 'react';
import { style } from 'typestyle';

const footerContainerStyle = style({
  backgroundColor: 'green'
});

const FooterContainer = () => {
  return (
    <footer className={footerContainerStyle}>
      <h2>FOOTER</h2>
    </footer>
  );
};

export default FooterContainer;
