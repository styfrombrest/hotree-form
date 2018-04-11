import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';

import Form from './../../components/Form/';
import Input from './../../components/FormInput';

import { setData } from './../../actions/';
import { dataFieldPropType } from './../../consts';

const mapStateToProps = state => ({
  duration: state.formData.duration,
  date: state.formData.date,
  time: state.formData.time,
});

const mapDispatchToProps = { setData };

class WhenForm extends React.Component {
  render() {
    const { duration, date, time } = this.props;

    const dateTimeCheck = (obj) => {
      const d = obj && obj.date ? obj.date : date.value;
      const t = obj && obj.time ? obj.time : time.value;

      // don't emphasize on first render
      if (!d && !t) {
        return null;
      }

      const format = 'YYYY-MM-DD HH:mm';
      const dateTime = moment(`${d} ${t}`, format);
      // console.log(`${d} ${t}`, dateTime.diff(moment()));
      return dateTime.diff(moment()) >= 0;
    };

    const handleChange = (name, value) => {
      // console.log('dateTimeCheck()', dateTimeCheck({ [name]: value }));
      this.props.setData(name, value, dateTimeCheck({ [name]: value }));
    };

    return (
      <Form className="container" title="When">
        <Input
          title="Starts on"
          name="date"
          data={{ ...date, status: dateTimeCheck() }}
          required
          setData={handleChange}
          type="date"
          min={moment().format('YYYY-MM-DD')}
        />
        <Input
          title="At"
          name="time"
          data={{ ...time, status: dateTimeCheck() }}
          required
          setData={handleChange}
          type="time"
          inputStyle={{ maxWidth: '105px' }}
        />
        <Input
          title="Duration"
          name="duration"
          data={duration}
          required
          placeholder="Duration"
          setData={this.props.setData}
          type="number"
          inputStyle={{ maxWidth: '80px' }}
          afterContent="hour"
        />
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WhenForm);

WhenForm.propTypes = {
  duration: dataFieldPropType,
  date: dataFieldPropType,
  time: dataFieldPropType,
  setData: PropTypes.func,
};
