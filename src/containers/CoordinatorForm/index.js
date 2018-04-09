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
  employee: state.formData.employee,
  email: state.formData.email,
});

const mapDispatchToProps = { loadEmployees, setData };

class AboutFormElement extends React.Component {
  componentDidMount() {
    this.props.loadEmployees();
  }

  render() {
    const { employees, employee, email } = this.props;

    return (
      <Form className="container" title="Coordinator">
        <Select
          title="Responsible"
          name="employee"
          list={employees}
          data={employee}
          setData={this.props.setData}
          placeholder="Select responsible employee"
          defaultValue={3}
        />
        <Input title="Email" name="email" data={email} required placeholder="Email" setData={this.props.setData} type="email" />
      </Form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutFormElement);

AboutFormElement.propTypes = {
  employee: dataFieldPropType,
  email: dataFieldPropType,
  employees: PropTypes.arrayOf(PropTypes.object),
  loadEmployees: PropTypes.func,
  setData: PropTypes.func,
};
