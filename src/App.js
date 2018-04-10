import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Header from './components/Header/';
import AboutForm from './containers/AboutForm/';
import CoordinatorForm from './containers/CoordinatorForm/';
import WhenForm from './containers/WhenForm/';

import Button from './components/Button/';
import Message from './components/Message/';

import './global-styles';

import { submitForm } from './actions/';
import { isFormDataInvalid } from './validators/';
import { dataFieldPropType } from './consts';

const FormsWrapper = styled.div`
  padding: 0 1em;
`;

const mapStateToProps = state => ({
  submit: state.submit,
  error: state.error,
  formData: state.formData,
});
const mapDispatchToProps = { submitForm };

const App = (props) => {
  const { formData } = props;

  // app supports as positive so negative messages, but negative messaging aren't implemented in this project
  const message =
    props.submit && props.submit === true ? (
      <Message title="Success">Event has been created.</Message>
    ) : (
      <Message title="Failure" type="error">
        Error
      </Message>
    );

  const form = (
    <FormsWrapper>
      <AboutForm />
      <CoordinatorForm />
      <WhenForm />

      <Button
        title="Publish Event"
        disabled={isFormDataInvalid(formData)}
        uppercase
        clickHandler={() => props.submitForm(props.formData)}
      />
    </FormsWrapper>
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
  formData: PropTypes.objectOf(dataFieldPropType),
};
