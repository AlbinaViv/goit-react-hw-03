import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import css from "./ContactForm.module.css";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("required"),
  number: Yup.number()
    .min(3, "Too short!")
    .default(50, "Too long!")
    .required("required"),
});

export const ContactForm = ({ onAdd }) => {
  const usernameFildeId = useId();
  const userphoneFildeId = useId();

  // const handleSubmit = (evt) => {
  //   evt.preventDefault();

  //   const form = evt.target;
  //   const { name, number } = form.elements;

  //   onSubmit({
  //     name: name.value,
  //     number: number.value,
  //   });

  // Посилання на DOM-елементи
  // console.log(number або  name);

  // Значення полів
  // console.log(form.elements.name.value);
  // console.log(form.elements.number.value);

  // Скидаємо значення полів після відправки
  // form.reset();
  // };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        // onAdd({ id: Date.now(), ...values });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label
          className={css.label}
          htmlFor={usernameFildeId}
        >
          Name
        </label>
        <Field
          type="text"
          name="name"
          id={usernameFildeId}
        />
        <ErrorMessage name="name" />
        <label
          className={css.label}
          htmlFor={userphoneFildeId}
        >
          Number
        </label>
        <Field
          type="tel"
          name="number"
          id={userphoneFildeId}
        />
        <ErrorMessage name="number" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
