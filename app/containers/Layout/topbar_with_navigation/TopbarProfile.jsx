import React, { useState } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import { Link } from 'react-router-dom';
import TopbarMenuLink from './TopbarMenuLink';

const LogIn = () => (
  <Link className="topbar__nav-link" to="/auth">
    <span className="topbar__link-icon lnr lnr-enter-down" />
    Вход
  </Link>
);

const TopbarProfile = () => {
  const [collapse, toggleCollapse] = useState(false);

  const toggle = () => toggleCollapse(!collapse);

  return (
    <div className="topbar__profile">
      <button className="topbar__avatar" type="button" onClick={toggle}>
        <p className="topbar__avatar-name">Roman Johanson</p>
        <DownIcon className="topbar__icon" />
      </button>
      {collapse && (
        <button className="topbar__back" type="button" onClick={toggle} />
      )}
      <Collapse isOpen={collapse} className="topbar__menu-wrap">
        <div className="topbar__menu">
          <TopbarMenuLink
            title="My Profile"
            icon="user"
            path="/account/profile"
          />
          <TopbarMenuLink
            title="Calendar"
            icon="calendar-full"
            path="/default_pages/calendar"
          />
          <TopbarMenuLink
            title="Tasks"
            icon="list"
            path="/default_pages/calendar"
          />
          <TopbarMenuLink title="Inbox" icon="inbox" path="/mail" />
          <div className="topbar__menu-divider" />
          <TopbarMenuLink
            title="Account Settings"
            icon="cog"
            path="/account/profile"
          />
          <TopbarMenuLink title="Lock Screen" icon="lock" path="/lock_screen" />
          <TopbarMenuLink title="Log Out" icon="exit" path="/log_in" />
        </div>
      </Collapse>
    </div>
  );
};

export default TopbarProfile;
