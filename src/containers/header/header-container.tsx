import * as React from 'react';
import { connect } from 'react-redux';
import { style } from 'typestyle';
import { Dispatch, bindActionCreators } from 'redux';
import { returntypeof } from 'react-redux-typescript';

import { RootState, RootAction } from 'src/redux';
import { actions } from '../../redux/app';

const headerContainerStyle = style({
  backgroundColor: 'red'
});

const mapStateToProps = (state: RootState) => ({
  appStarted: state.app.appStarted,
  appData: state.app.appData,
});

const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => bindActionCreators({
  loadAppData: actions.loadAppDataRequest
}, dispatch);

const stateProps = returntypeof(mapStateToProps);
const dispatchProps = returntypeof(mapDispatchToProps);
type Props = typeof stateProps & typeof dispatchProps;

class HeaderContainer extends React.Component<Props, {}> {

  componentDidMount() {
    this.props.loadAppData();
    
  }
  render() {
    const { appStarted, appData } = this.props;
    return (
      <header className={headerContainerStyle}>
        <h2>HEADER</h2>
        <p>{`App started: ${appStarted}`}</p>
        <p>{`App data: ${appData}`}</p>
      </header>
    );
  }
}

const Connected = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
export default Connected;
