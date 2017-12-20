import * as React from 'react';
import { style } from 'typestyle';

const homeContainerStyle = style({
  backgroundColor: 'blue'
});

interface Props { }

const HomeContainer: React.SFC<Props> = (props: Props) => {
  return (
    <section className={homeContainerStyle}>
      <h2>HOME</h2>
    </section>
  );
};

export default HomeContainer;
