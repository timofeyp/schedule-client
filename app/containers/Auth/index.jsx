import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { setAuthRoutine } from 'containers/App/session/constants';
import LogInForm from './components/LogInForm';

const LogIn = props => (
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Войдите в систему</h3>
          <h4 className="account__subhead subhead">
            Используйте учетную запись домена LN
          </h4>
        </div>
        <LogInForm {...props} />
      </div>
    </div>
  </div>
);

LogIn.propTypes = {};

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = {
  setAuth: events => setAuthRoutine.trigger(events),
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogIn);

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
