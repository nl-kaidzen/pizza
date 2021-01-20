import React from 'react';
import PropTypes from 'prop-types';

import { getLabelByValue } from 'helpers/getLabelByValue';

const PizzaConfirmationPage = ({ dough, size, sauce, toppings }) => (
  <div>
    <h1>Ваш заказ:</h1>
    <p>{`Размер: ${getLabelByValue(size)}`}</p>
    <p>{`Тип теста: ${getLabelByValue(dough)}`}</p>
    <p>{`Соус: ${getLabelByValue(sauce)}`}</p>
    <p>Топинги: </p>
    <ul>
      {toppings.map((topping) => (
        <li key={topping}>{getLabelByValue(topping)}</li>
      ))}
    </ul>
  </div>
);

PizzaConfirmationPage.propTypes = {
  dough: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  sauce: PropTypes.string.isRequired,
  toppings: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default React.memo(PizzaConfirmationPage);
