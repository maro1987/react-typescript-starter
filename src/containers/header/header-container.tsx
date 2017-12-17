import * as React from 'react';
import { connect } from 'react-redux';
import { style } from 'typestyle';
import { Dispatch, bindActionCreators } from 'redux';

import { RootState, RootAction } from 'src/redux';

const headerContainerStyle = style({
  backgroundColor: 'red'
});

const mapStateToProps = (state: RootState) => ({
  appStarted: state.app.appStarted,
});

export interface Props {
  appStarted: boolean;
}

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({}, dispatch);

const HeaderContainer: React.SFC<Props> = (props: Props) => {
  const { appStarted } = props;
  return (
    <header className={headerContainerStyle}>
      <h2>HEADER</h2>
      <p>{`App started: ${appStarted}`}</p>
    </header>
  );
};

const Connected = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
export default Connected;
