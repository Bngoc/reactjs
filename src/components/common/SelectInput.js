import React, {PropTypes} from 'react';

const SelectInput = ({name, label, onChange, defaultOption, options, value, error}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <select type="text" name={name} className="form-control" onChange={onChange} value={value}>
          <option value="">{defaultOption}</option>
          {options.map((option) => {
            return <option value={option.value} key={option.value}>{option.text}</option>;
          })}
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultOption: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput;
