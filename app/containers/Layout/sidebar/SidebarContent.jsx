import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    const { onClick } = this.props;
    onClick();
  };

  render() {
    const { changeToLight, changeToDark } = this.props;

    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink
            title="Dashboard Default"
            icon="list"
            route="/dashboard_default"
            onClick={this.hideSidebar}
          />
          <SidebarCategory title="Layout" icon="layers">
            <button
              className="sidebar__link"
              type="button"
              onClick={changeToLight}
            >
              <p className="sidebar__link-title">Light Theme</p>
            </button>
            <button
              className="sidebar__link"
              type="button"
              onClick={changeToDark}
            >
              <p className="sidebar__link-title">Dark Theme</p>
            </button>
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="UI Elements" icon="diamond">
            <SidebarLink
              title="Alerts"
              route="/ui/alerts"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Buttons"
              route="/ui/buttons"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Carousel"
              route="/ui/carousel"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Collapse"
              route="/ui/collapse"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Grids"
              route="/ui/grids"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Modals"
              route="/ui/modals"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Notifications"
              route="/ui/notifications"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Panels"
              route="/ui/panels"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Progress Bars"
              route="/ui/progress_bars"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Range Sliders"
              route="/ui/range_sliders"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Tabs"
              route="/ui/tabs"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Timeline"
              route="/ui/timeline"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Tooltips & Popovers"
              route="/ui/tooltips"
              onClick={this.hideSidebar}
            />
            <SidebarLink
              title="Typography"
              route="/ui/typography"
              onClick={this.hideSidebar}
            />
          </SidebarCategory>
          <SidebarLink
            title="Mail Application"
            icon="envelope"
            route="/mail"
            onClick={this.hideSidebar}
          />
        </ul>
        <ul className="sidebar__block">
          <SidebarCategory title="Account" icon="user">
            <SidebarLink
              title="Email Confirmation"
              route="/account/email_confirmation"
            />
            <SidebarLink title="Lock Screen" route="/lock_screen" />
            <SidebarLink title="Log In" route="/log_in" />
            <SidebarLink title="Log In Photo" route="/log_in_photo" />
            <SidebarLink
              title="Profile"
              route="/account/profile"
              onClick={this.hideSidebar}
            />
            <SidebarLink title="Register" route="/register" />
            <SidebarLink title="Register Photo" route="/register_photo" />
          </SidebarCategory>
          <SidebarCategory title="Multilevel Menu " icon="menu">
            <SidebarLink title="Second Level Item" />
            <SidebarCategory title="Second Level Item">
              <SidebarLink title="Third Level Item" />
              <SidebarLink title="Third Level Item" />
            </SidebarCategory>
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="Log Out" icon="exit" route="/log_in" />
        </ul>
        <ul className="sidebar__block">
          <SidebarLink
            title="Documentation"
            icon="text-align-justify"
            route="/documentation/introduction"
            onClick={this.hideSidebar}
          />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
