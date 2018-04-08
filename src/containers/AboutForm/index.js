import React from 'react';
import PropTypes from 'prop-types';

import Form from './../../components/Form/';
import Input from './../../components/FormInput';
import TextArea from './../../components/FormTextArea';
import Select from './../../components/FormSelect';
import Button from './../../components/Button/';

const AboutFormElement = props => (
  <Form className="container" title={props.title}>
    <Input title="Title" required placeholder="Make it short and clear" />
    <TextArea title="Description" required placeholder="Write about your event be creative" />
    <Select title="Category" placeholder="Select category(skills, interests, locations)" />

    <Button title="Publish Event" uppercase clickHandler={() => console.log('click!')} />
  </Form>
);

export default AboutFormElement;

AboutFormElement.propTypes = {
  title: PropTypes.string.isRequired,
};
