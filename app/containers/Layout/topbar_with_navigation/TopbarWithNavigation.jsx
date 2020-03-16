import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoImg from 'images/logo_rosatom_rus.svg';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import TopbarMail from './TopbarMail';
import TopbarLanguage from './TopbarLanguage';
import TopbarNotification from './TopbarNotification';
import TopbarNav from './tobar_nav/TopbarNav';

export default class TopbarWithNavigation extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
  };

  render() {
    const { changeMobileSidebarVisibility } = this.props;

    return (
      <div className="topbar topbar--navigation">
        <div className="topbar__wrapper">
          <div className="topbar__left">
            {/*<TopbarSidebarButton changeMobileSidebarVisibility={changeMobileSidebarVisibility} />*/}
            {/*<img className="topbar__logo" src={logoImg} alt="icon" />*/}
            {/*/!*<Link className="topbar__logo" to="/dashboard_default" />*!/*/}
          </div>
          <TopbarNav />
          <div className="topbar__right">
            <TopbarNotification />
            <TopbarMail new />
            <TopbarProfile />
          </div>
        </div>
      </div>
    );
  }
}