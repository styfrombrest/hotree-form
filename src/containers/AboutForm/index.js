import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from './../../components/Form/';
import Input from './../../components/FormInput';
import Radio from './../../components/FormRadio';
import TextArea from './../../components/FormTextArea';
import Select from './../../components/FormSelect';

import { loadCategories, setData } from './../../actions/';
import { dataFieldPropType, radioFieldPropType } from './../../consts';

const mapStateToProps = state => ({
  categories: state.categories,
  category: state.formData.category,
  title: state.formData.title,
  description: state.formData.description,
  paidEvent: state.formData.paidEvent,
  eventFee: state.formData.eventFee,
  reward: state.formData.reward,
});

const mapDispatchToProps = { loadCategories, setData };

class AboutForm extends React.Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const {
      title, description, categories, category, paidEvent, eventFee, reward,
    } = this.props;

    return (
      <Form className="container" title="About">
        <Input title="Title" name="title" data={title} required placeholder="Make it short and clear" setData={this.props.setData} />
        <TextArea
          title="Description"
          name="description"
          data={description}
          setData={this.props.setData}
          required
          placeholder="Write about your event be creative"
        />
        <Select
          title="Category"
          name="category"
          list={categories}
          data={category}
          setData={this.props.setData}
          placeholder="Select category (skills, interests, locations)"
          hint="Describes topic and people who should be interested in this event"
        />
        <Radio title="Payment" name="paidEvent" data={paidEvent} setData={this.props.setData} />
        {paidEvent.value && paidEvent.value === 'paid' ? (
          <Input
            title="Fee"
            name="eventFee"
            data={eventFee}
            required
            placeholder="Fee"
            setData={this.props.setData}
            type="number"
            inputStyle={{ width: '50px', float: 'left' }}
            afterContent="$"
          />
        ) : null}

        <Input
          title="Reward"
          name="reward"
          data={reward}
          required
          placeholder="Number"
          setData={this.props.setData}
          type="number"
          inputStyle={{ width: '65px', float: 'left' }}
          afterContent="reward points for attendance"
        />
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutForm);

AboutForm.propTypes = {
  title: dataFieldPropType,
  description: dataFieldPropType,
  category: dataFieldPropType,
  paidEvent: radioFieldPropType,
  eventFee: dataFieldPropType,
  reward: dataFieldPropType,
  categories: PropTypes.arrayOf(PropTypes.object),
  loadCategories: PropTypes.func,
  setData: PropTypes.func,
};
