import PropTypes from 'prop-types';
import { TextInputField } from 'evergreen-ui';

export const TextInput = ({ inputWidth, name, label, description, placeholder, value, onChange }) => (
  <TextInputField
    inputWidth={inputWidth}
    name={name}
    label={label}
    description={description}
    placeholder={placeholder}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);

TextInput.propTypes = {
  inputWidth: PropTypes.number,
  name: PropTypes.string,
  label: PropTypes.string,
  description: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  label: 'Input',
  value: '',
  onChange: () => {},
};
