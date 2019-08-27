/* eslint-disable no-return-assign */
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import NotificationSystem from 'rc-notification';
import Topbar from './topbar/Topbar';
import TopbarWithNavigation from './topbar_with_navigation/TopbarWithNavigation';
import Sidebar from './sidebar/Sidebar';
import SidebarMobile from './topbar_with_navigation/sidebar_mobile/SidebarMobile';
import Customizer from './customizer/Customizer';
import { BasicNotification } from '../../shared/components/Notification';

let notification = null;

const showNotification = () => {
  notification.notice({
    content: (
      <BasicNotification
        title="👋 Welcome to the EasyDev!"
        message="You have successfully registered in the EasyDev. Now you can start to explore the dashboard
                interface with a bunch of components and applications. Enjoy!"
      />
    ),
    duration: 5,
    closable: true,
    style: { top: 0, left: 'calc(100vw - 100%)' },
    className: 'right-up',
  });
};

const Layout = props => {
  useEffect(() => {
    NotificationSystem.newInstance({}, n => (notification = n));
    setTimeout(() => showNotification(), 700);
    return () => notification.destroy;
  }, []);

  const changeSidebarVisibility = () => {};

  const changeMobileSidebarVisibility = () => {};

  const changeToDark = () => {};

  const changeToLight = () => {};

  const toggleTopNavigation = () => {};

  const changeBorderRadius = () => {};

  const toggleBoxShadow = () => {};

  const customizer = {
    squaredCornders: false,
    topNavigation: true,
    withBoxShadow: false,
  };
  const sidebar = {
    collapse: false,
    show: false,
  };
  const theme = {
    className: 'theme-light',
  };
  const layoutClass = classNames({
    layout: true,
    'layout--collapse': sidebar.collapse,
    'layout--top-navigation': customizer.topNavigation,
  });

  const {
    location: { pathname },
  } = props;

  return (
    !(pathname === '/login') && (
      <div className={layoutClass}>
        <Customizer
          customizer={customizer}
          sidebar={sidebar}
          theme={theme}
          changeSidebarVisibility={changeSidebarVisibility}
          toggleTopNavigation={toggleTopNavigation}
          changeToDark={changeToDark}
          changeToLight={changeToLight}
          changeBorderRadius={changeBorderRadius}
          toggleBoxShadow={toggleBoxShadow}
        />
        {customizer.topNavigation ? (
          <TopbarWithNavigation
            changeMobileSidebarVisibility={changeMobileSidebarVisibility}
          />
        ) : (
          <Topbar
            changeMobileSidebarVisibility={changeMobileSidebarVisibility}
            changeSidebarVisibility={changeSidebarVisibility}
          />
        )}
        {customizer.topNavigation ? (
          <SidebarMobile
            sidebar={sidebar}
            changeToDark={changeToDark}
            changeToLight={changeToLight}
            changeMobileSidebarVisibility={changeMobileSidebarVisibility}
          />
        ) : (
          <Sidebar
            sidebar={sidebar}
            changeToDark={changeToDark}
            changeToLight={changeToLight}
            changeMobileSidebarVisibility={changeMobileSidebarVisibility}
          />
        )}
      </div>
    )
  );
};

export default withRouter(
  connect(state => ({
    customizer: state.customizer,
    theme: state.theme,
  }))(Layout),
);
