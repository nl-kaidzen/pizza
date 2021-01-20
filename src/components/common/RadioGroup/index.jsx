import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = ({ radios, onChange, name, value }) => (
  <ul>
    {radios.map(({ id, label }) => (
      <label htmlFor={id}>
        <input
          type="radio"
          id={id}
          name={name}
          checked={value === id}
          onChange={() => onChange(id)}
        />
        {label}
      </label>
    ))}
  </ul>
);

RadioGroup.propTypes = {
  radios: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(RadioGroup);
