import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from './../../components/Form/';
import Input from './../../components/FormInput';
import TextArea from './../../components/FormTextArea';
import Select from './../../components/FormSelect';

import { loadCategories, setData } from './../../actions/';
import { dataFieldPropType } from './../../consts';

const mapStateToProps = state => ({
  categories: state.categories,
  category: state.formData.category,
  title: state.formData.title,
  description: state.formData.description,
});

const mapDispatchToProps = { loadCategories, setData };

class AboutFormElement extends React.Component {
  componentDidMount() {
    this.props.loadCategories();
  }

  render() {
    const {
      title, description, categories, category,
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
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutFormElement);

AboutFormElement.propTypes = {
  title: dataFieldPropType,
  description: dataFieldPropType,
  category: dataFieldPropType,
  categories: PropTypes.arrayOf(PropTypes.object),
  loadCategories: PropTypes.func,
  setData: PropTypes.func,
};
