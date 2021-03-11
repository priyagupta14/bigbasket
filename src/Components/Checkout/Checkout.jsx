/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './Checkout.css';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

import * as yup from 'yup';

const dataMassaging = (productList) => {
  const eachItem = [];
  Object.keys(productList).forEach((category) => productList[category].forEach(
    (eachProduct) => {
      const each = {
        id: eachProduct.id,
        name: eachProduct.name,
        price: eachProduct.price,
        count: eachProduct.inCartCount,
        category,
      };
      eachItem.push(each);
    },
  ));
  return ({ items: eachItem });
};

// const axiosPost = (userDetails, cartDetails) => {
//   const { data, error } = axios.post('/orders', cartDetails);
// };

const Checkout = ({ productList, orderCart }) => {
  const result = dataMassaging(productList);
  return (
    <Formik
      initialValues={{
        Name: '',
        Address: '',
        PhoneNo: '',
        Email: '',
      }}
      validationSchema={yup.object({
        Name: yup.string().max(20, 'Name should not exceed 20 Characters')
          .required('Please Enter Name'),
        Address: yup.string()
          .required('Please Enter Address'),
        PhoneNo: yup.string().max(10, 'not more than 10 numbers')
          .required('Please Enter Phone no'),
        Email: yup.string()
          .email('Invalid email address')
          .required('Please Enter Email'),
      })}
      onSubmit={async (value) => {
        orderCart(result);
        console.log(value);
        alert(JSON.stringify('Thank you for Shopping'));
      }}
    >
      {(prop) => (
        <div className="checkout-form">
          <h2>Enter Details...</h2>
          <Form>
            <p>
              <label htmlFor="Name">  Name </label>
              <Field name="Name" type="text" />
              <ErrorMessage name="Name" />
            </p>
            <p>
              <label htmlFor="Address">  Address </label>
              <Field name="Address" type="text" />
              <ErrorMessage name="Address" />
            </p>
            <p>
              <label htmlFor="PhoneNo">  Phone no. </label>
              <Field name="PhoneNo" type="number" />
              <ErrorMessage name="PhoneNo" />
            </p>
            <p>
              <label htmlFor="Email">  Email</label>
              <Field name="Email" type="text" />
              <ErrorMessage name="Email" />
            </p>
            <button type="submit" disabled={prop.isValid === false}>Submit</button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
export default Checkout;
