import css from "./ContactForm.module.css";

export const ContactForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { name, number } = form.elements;

    onSubmit({
      name: name.value,
      number: number.value,
    });

    // Посилання на DOM-елементи
    // console.log(name, number);

    // Значення полів
    // console.log(name.value, number.value);

    // Скидаємо значення полів після відправки
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.label}>Name </label>
      <input
        type="text"
        name="name"
      />
      <label className={css.label}>Number </label>
      <input
        type="tel"
        name="phone"
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
