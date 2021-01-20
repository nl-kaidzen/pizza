import React from 'react';
import PropTypes from 'prop-types';

const CheckboxGroup = ({ checkboxes, onChange }) => (
  <ul>
    {checkboxes.map(({ id, label }) => (
      <li key={id}>
        <label htmlFor={id}>
          <input type="checkbox" id={id} name={id} onChange={() => onChange(id)} />
          {label}
        </label>
      </li>
    ))}
  </ul>
);

CheckboxGroup.propTypes = {
  checkboxes: PropTypes.arrayOf({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(CheckboxGroup);
