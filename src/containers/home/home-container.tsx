import * as React from 'react';
import { style } from 'typestyle';

const homeContainerStyle = style({
  backgroundColor: 'blue'
});

const HomeContainer = () => {
  return (
    <section className={homeContainerStyle}>
      <h2>HOME</h2>
    </section>
  );
};

export default HomeContainer;
