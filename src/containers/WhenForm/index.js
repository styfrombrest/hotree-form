import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from './../../components/Form/';
import Input from './../../components/FormInput';

import { setData } from './../../actions/';
import { dataFieldPropType } from './../../consts';

const mapStateToProps = state => ({
  duration: state.formData.duration,
});

const mapDispatchToProps = { setData };

const AboutFormElement = (props) => {
  const { duration } = props;

  return (
    <Form className="container" title="When">
      <Input
        title="Duration"
        name="duration"
        data={duration}
        required
        placeholder="Duration"
        setData={props.setData}
        type="number"
        inputStyle={{ width: '80px', float: 'left' }}
        afterContent="hour"
      />
    </Form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutFormElement);

AboutFormElement.propTypes = {
  duration: dataFieldPropType,
  setData: PropTypes.func,
};
