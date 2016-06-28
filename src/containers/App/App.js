import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { IndexLink } from 'react-router';
import Helmet from 'react-helmet';
import { isLoaded as isInfoLoaded, load as loadInfo } from 'redux/modules/info';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { push } from 'react-router-redux';
import { RouteHandler } from 'react-router';
import config from '../../config';
import { asyncConnect } from 'redux-async-connect';
import { AppBar, LeftNav } from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// Define menu items for LeftNav
const menuItems = [
  { route: '/', text: 'Home' },
  { route: 'about', text: 'About' },
  { route: 'contact', text: 'Contact' },
];

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isInfoLoaded(getState())) {
      promises.push(dispatch(loadInfo()));
    }
    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({user: state.auth.user}),
  {logout, pushState: push})
export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  static contextTypes = {
    store: PropTypes.object.isRequired
  };

  static childContextTypes = {
    muiTheme: React.PropTypes.object
  };

  static getChildContext() {
    return {
      muiTheme: getMuiTheme()
    };
  }

  constructor() {
    super();

    this._handleClick = this._handleClick.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/loginSuccess');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  // handleLogout = (event) => {
  //   event.preventDefault();
  //   this.props.logout();
  // };

  _handleClick(e) {
    e.preventDefault();

    this.refs.leftNav.toggle();
  }

  // Get the selected item in LeftMenu
  _getSelectedIndex() {
    // Just return 0 for now, the for loop below isn't working yet.
    return 0;

    // let currentItem;
    //
    // for (let i = menuItems.length - 1; i >= 0; i--) {
    //   currentItem = menuItems[i];
    //   if (currentItem.route && this.context.router.isActive(currentItem.route)) {
    //     return i;
    //   }
    // }
  }

  _onLeftNavChange(e, key, payload) {
    // Do DOM Diff refresh
    this.context.router.transitionTo(payload.route);
  }

  render() {
    // const {user} = this.props;
    const styles = require('./App.scss');

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className={styles.app}>
          <Helmet {...config.app.head}/>

          <LeftNav
            ref="leftNav"
            docked={false}
            menuItems={menuItems}
            selectedIndex={this._getSelectedIndex()}
            onChange={this._onLeftNavChange} />

          <header>
            <AppBar title="MUI Routing" onLeftIconButtonTouchTap={this._handleClick} />
          </header>

          <section className={styles.appContent}>
            <RouteHandler />
          </section>

        </div>
      </MuiThemeProvider>
    );
  }

}
