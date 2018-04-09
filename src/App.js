import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from './components/Header/';
import AboutForm from './containers/AboutForm/';
import Form from './components/Form/';

import Button from './components/Button/';
import Message from './components/Message/';

import './global-styles';

import { submitForm } from './actions/';
import validators from './validators/';

const mapStateToProps = state => ({
  submit: state.submit,
  error: state.error,
  formData: state.formData,
});
const mapDispatchToProps = { submitForm };

const App = (props) => {
  const { formData } = props;

  const isFormInvalid = Object.keys(formData).some((key) => {
    const { type, value } = formData[key];
    return type ? !validators(type, value) : null;
  });

  const message =
    props.submit && props.submit === true ? (
      <Message title="Success">Event has been created.</Message>
    ) : (
      <Message title="Failure" type="error">
        Error
      </Message>
    );

  const form = (
    <div>
      <AboutForm />
      <Form title="Coordinator" />
      <Form title="When" />

      <Button title="Publish Event" disabled={isFormInvalid} uppercase clickHandler={() => props.submitForm(props.formData)} />
    </div>
  );

  return (
    <div>
      <Header />

      {props.submit || props.error ? message : form}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  submitForm: PropTypes.func,
  submit: PropTypes.bool,
  error: PropTypes.string,
  formData: PropTypes.object,
};
