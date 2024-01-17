import React from "react";
import styles from "./MenuBoton.module.css";

function MenuBoton({ active, onClick }) {
  return (
    <div
      className={`icon_burguer inline-flex p-3 m-[2rem] rounded-full lg:hidden bg-white ${
        active ? `${styles.ekeZOi}` : `${styles.menuMovil}`
      }`}
    >
      <button
        onClick={onClick}
        type="button"
        aria-label="Open contact menu"
        aria-controls="contact-menu"
        aria-expanded="false"
        className={`${styles.menuToggle} ${active ? `${styles.x}` : ""}`}
      ></button>
    </div>
  );
}

export default MenuBoton;
