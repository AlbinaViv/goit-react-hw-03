import { useState } from "react";
import css from "./SearchBox.module.css";

export const SearchBox = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  };

  // console.log(inputValue);

  return (
    <div className={css.wrap}>
      <label className={css.label}>Find contacts by name </label>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <p>{inputValue}</p>
    </div>
  );
};
