import React from 'react';
import PropTypes from 'prop-types';

const RadioGroup = React.forwardRef(({ radios, onChange, name, value }, ref) => (
  <ul>
    {radios.map(({ id, label }) => (
      <li key={id}>
        <label htmlFor={id}>
          <input
            type="radio"
            id={id}
            name={name}
            value={id}
            checked={value === id}
            onChange={() => onChange(id)}
            ref={ref}
          />
          {label}
        </label>
      </li>
    ))}
  </ul>
));

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
