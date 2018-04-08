import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color } from './../../consts';

const inputWidth = '60%';
const maxLength = 140;

const FormItem = styled.div`
  padding: 1.5em 0;
  ::after {
    content: '';
    clear: both;
    display: table;
  }
`;

const Input = styled.input`
  width: ${inputWidth};
  float: left;
  height: 2em;
  border: 1px solid ${color.silver};
  padding: 0.5em;
  margin: auto 1em;

  ::placeholder {
    color: ${color.silver};
  }
`;

const TextareaWrapper = styled.div`
  width: ${inputWidth};
  float: left;
  margin: auto 1em;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5em;
  border: 1px solid ${color.silver};

  ::placeholder {
    color: ${color.silver};
  }
`;

const TextareaHint = styled.div`
  color: ${color.silver};
  text-align: left;
  font-size: 0.75em;
  font-style: italic;
  float: left;
`;

const TextareaCounter = styled.div`
  color: ${color.silver};
  text-align: left;
  font-size: 0.75em;
  font-style: italic;
  float: right;
`;

const Title = styled.div`
  text-transform: uppercase;
  text-align: left;
  float: left;
  width: 18%;
  color: ${color.blue};
  opacity: 0.7;
`;

const Emphasize = styled.span`
  color: ${color.red};
`;

class FormItemElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { props } = this;
    const { value } = this.state;

    return (
      <FormItem className={props.error ? 'error' : ''}>
        <Title>
          {props.title}
          {props.required ? <Emphasize> *</Emphasize> : ''}
        </Title>
        {props.textarea ? (
          <TextareaWrapper>
            <Textarea maxLength={`${maxLength}`} placeholder={props.placeholder} value={value} onChange={this.handleChange} />{' '}
            <TextareaHint>Max length 140 characters</TextareaHint>
            <TextareaCounter>
              {value.length}/{maxLength}
            </TextareaCounter>
          </TextareaWrapper>
        ) : (
          <Input value={value} placeholder={props.placeholder} />
        )}

        {props.error ? <Emphasize>{props.title} can&apos;t be empty</Emphasize> : null}
      </FormItem>
    );
  }
}

export default FormItemElement;

FormItemElement.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

FormItemElement.defaultProps = {
  textarea: false,
  required: false,
  error: false,
};
