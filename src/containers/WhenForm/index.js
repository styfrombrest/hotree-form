import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from './../../components/Form/';
import Input from './../../components/FormInput';
import Radio from './../../components/FormRadio';

import { setData } from './../../actions/';
import { dataFieldPropType } from './../../consts';

const mapStateToProps = state => ({
  duration: state.formData.duration,
  date: state.formData.date,
  time: state.formData.time,
  timePeriod: state.formData.timePeriod,
});

const mapDispatchToProps = { setData };

const AboutFormElement = (props) => {
  const {
    duration, date, time, timePeriod,
  } = props;

  return (
    <Form className="container" title="When">
      <Input title="Starts on" name="date" data={date} required setData={props.setData} type="date" />
      <Input name="time" data={time} required setData={props.setData} type="time" inputStyle={{ width: '80px', float: 'left' }} />
      <Radio name="timePeriod" data={timePeriod} setData={props.setData} />
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
  date: dataFieldPropType,
  time: dataFieldPropType,
  timePeriod: dataFieldPropType,
  setData: PropTypes.func,
};
