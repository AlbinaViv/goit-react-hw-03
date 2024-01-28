import css from "./Contact.module.css";
import { CgGirl } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";

export const Contact = ({ name, number, onDelete, id }) => {
  return (
    <>
      <p>
        <CgGirl /> {name}
      </p>
      <p>
        <BsFillTelephoneFill />
        {number}
      </p>
      <button
        onClick={() => onDelete(id)}
        type="button"
      >
        Delete
      </button>
    </>
  );
};
