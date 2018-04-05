import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import Input from './Form/Input';
import Select from './Form/Select';

const AboutFormElement = props => (
  <Form className="container" title={props.title}>
    <Input title="Title" required placeholder="Make it short and clear" />
    <Input title="Description" required textarea placeholder="Write about your event be creative" />
    <Select title="Category" placeholder="Select category(skills, interests, locations)" />
  </Form>
);

export default AboutFormElement;

AboutFormElement.propTypes = {
  title: PropTypes.string.isRequired,
};
