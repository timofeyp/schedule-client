import React, { PureComponent } from 'react';
import classNames from 'classnames';
import CloseIcon from 'mdi-react/CloseIcon';
import PropTypes from 'prop-types';
import settingsImg from 'images/settings.svg';
import Filter from 'containers/Filter';
import {
  CustomizerProps,
  SidebarProps,
  ThemeProps,
} from '../../../shared/prop-types/ReducerProps';

export default class Customizer extends PureComponent {
  static propTypes = {
    sidebar: SidebarProps.isRequired,
    customizer: CustomizerProps.isRequired,
    theme: ThemeProps.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
    toggleTopNavigation: PropTypes.func.isRequired,
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    changeBorderRadius: PropTypes.func.isRequired,
    toggleBoxShadow: PropTypes.func.isRequired,
  };

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    const { open } = this.state;
    const customizerClass = classNames({
      customizer__wrap: true,
      'customizer__wrap--open': open,
    });

    const {
      changeSidebarVisibility,
      sidebar,
      customizer,
      theme,
      toggleTopNavigation,
      changeToDark,
      changeToLight,
      changeBorderRadius,
      toggleBoxShadow,
    } = this.props;

    return (
      <div className="customizer">
        <button
          className="customizer__btn"
          type="button"
          onClick={this.handleOpen}
        >
          <img className="customizer__btn-icon" src={settingsImg} alt="icon" />
        </button>
        <div className={customizerClass}>
          <div className="customizer__title-wrap">
            <h5>Настройки</h5>
            <button
              className="customizer__close-btn"
              type="button"
              onClick={this.handleOpen}
            >
              <CloseIcon />
            </button>
          </div>
          <p className="customizer__caption">
            Настройте фильтры для отображения расписания.
          </p>
          <Filter />
        </div>
      </div>
    );
  }
}
