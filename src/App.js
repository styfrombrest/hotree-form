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

const mapStateToProps = state => ({
  submit: state.submit,
  error: state.error,
});
const mapDispatchToProps = { submitForm };

const App = (props) => {
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

      <Button title="Publish Event" uppercase clickHandler={props.submitForm} />
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
};
