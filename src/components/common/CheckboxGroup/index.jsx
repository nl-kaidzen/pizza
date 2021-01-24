import React from 'react';
import PropTypes from 'prop-types';

const CheckboxGroup = React.forwardRef(({ checkboxes, onChange, name }, ref) => (
  <ul>
    {checkboxes.map(({ id, label, value }) => (
      <li key={id}>
        <label htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            name={name}
            onChange={() => onChange(id)}
            ref={ref}
            value={value}
          />
          {label}
        </label>
      </li>
    ))}
  </ul>
));

CheckboxGroup.propTypes = {
  checkboxes: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(CheckboxGroup);
