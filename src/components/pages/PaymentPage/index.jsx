/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-alert */
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

const PaymentPage = () => {
  const { register, handleSubmit, control } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="cc-number">
        Номер карты
        <Controller as={InputMask} control={control} name="cc-number" mask="9999 9999 9999 9999" />
      </label>
      <label htmlFor="cardholder">
        Имя Фамилия
        <input type="text" ref={register} name="cardholder" id="cardholder" />
      </label>
      <label htmlFor="date">
        Дата
        <input type="text" ref={register} name="date" id="date" />
      </label>
      <label htmlFor="cvv">
        CVV-код
        <input type="tel" ref={register} name="cvv" id="cvv" />
      </label>
      <button type="submit">Оплатить</button>
    </form>
  );
};

export default React.memo(PaymentPage);
