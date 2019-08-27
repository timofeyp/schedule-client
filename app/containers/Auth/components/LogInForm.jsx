import React, { useState } from 'react';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import InputField from 'components/Fields/InputErrorField';
import { Form as FinalForm, Field } from 'react-final-form';
import PropTypes from 'prop-types';
import { Form, Button } from 'reactstrap';
import { promiseListener } from 'configureStore';
import MakeAsyncFunction from 'react-redux-promise-listener';
import { setAuthRoutine } from 'containers/App/session/constants';

const LogInForm = () => {
  const [showPassword, toggleShowPassword] = useState(false);
  const handleShow = e => {
    e.preventDefault();
    toggleShowPassword(!showPassword);
  };

  return (
    <MakeAsyncFunction
      listener={promiseListener}
      start={setAuthRoutine.TRIGGER}
      resolve={setAuthRoutine.SUCCESS}
      reject={setAuthRoutine.FAILURE}
    >
      {onSubmit => (
        <FinalForm
          onSubmit={onSubmit}
          className="form"
          subscription={{
            submitError: true,
            dirtySinceLastSubmit: true,
          }}
          render={({ handleSubmit, ...props }) => (
            <Form onSubmit={handleSubmit} className="form">
              <div className="form__form-group">
                <span className="form__form-group-label">Логин</span>
                <div className="form__form-group-field">
                  <div className="form__form-group-icon">
                    <AccountOutlineIcon />
                  </div>
                  <Field
                    component={InputField}
                    name="username"
                    type="text"
                    placeholder="Логин"
                    withoutGroup
                    {...props}
                  />
                </div>
              </div>
              <div className="form__form-group">
                <span className="form__form-group-label">Пароль</span>
                <div className="form__form-group-field">
                  <div className="form__form-group-icon">
                    <KeyVariantIcon />
                  </div>
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Пароль"
                    component={InputField}
                    withoutGroup
                    {...props}
                  />
                  <button
                    className={`form__form-group-button${
                      showPassword ? ' active' : ''
                    }`}
                    onClick={e => handleShow(e)}
                    type="button"
                  >
                    <EyeIcon />
                  </button>
                </div>
              </div>
              <div className="form__form-group" />
              <Button
                outline
                className="btn btn-primary account__btn account__btn--small"
              >
                Вход
              </Button>
            </Form>
          )}
        />
      )}
    </MakeAsyncFunction>
  );
};

// eslint-disable-next-line react/no-typos
LogInForm.propTypes = {
  setAuth: PropTypes.func,
};

export default LogInForm;
