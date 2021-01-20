/* eslint-disable no-console */
import React from 'react';

const PREVIOUS_ORDERS = [
  { id: '123', date: '22.01.2019', label: 'Маргарита' },
  { id: '124', date: '22.02.2019', label: 'Пепперони' },
  { id: '125', date: '22.02.2019', label: 'Экономная' },
];

const PreviousOrdersPage = () => (
  <ul>
    {PREVIOUS_ORDERS.map(({ id, date, label }) => (
      <li>
        <p>
          Номер заказа:
          {id}
        </p>
        <p>
          Дата заказа:
          {date}
        </p>
        <p>
          Пицца:
          {label}
        </p>
      </li>
    ))}
  </ul>
);

export default React.memo(PreviousOrdersPage);
