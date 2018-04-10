import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Form from './../../components/Form/';
import Input from './../../components/FormInput';
import Select from './../../components/FormSelect';

import { loadEmployees, setData } from './../../actions/';
import { dataFieldPropType } from './../../consts';

const mapStateToProps = state => ({
  employees: state.employees,
  coordinator: state.formData.coordinator,
  email: state.formData.email,
  phone: state.formData.phone,
});

const mapDispatchToProps = { loadEmployees, setData };

class CoordinatorForm extends React.Component {
  componentDidMount() {
    this.props.loadEmployees();
  }

  render() {
    const {
      employees, coordinator, email, phone,
    } = this.props;

    return (
      <Form className="container" title="Coordinator">
        <Select
          title="Responsible"
          name="coordinator"
          list={employees}
          data={coordinator}
          setData={this.props.setData}
          placeholder="Select responsible employee"
        />
        <Input title="Email" name="email" data={email} required placeholder="Email" setData={this.props.setData} type="email" />
        <Input title="Phone" name="phone" data={phone} required placeholder="Phone" setData={this.props.setData} type="tel" />
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoordinatorForm);

CoordinatorForm.propTypes = {
  coordinator: dataFieldPropType,
  email: dataFieldPropType,
  phone: dataFieldPropType,
  employees: PropTypes.arrayOf(PropTypes.object),
  loadEmployees: PropTypes.func,
  setData: PropTypes.func,
};
