import React from "react";
import Logo from "../../../public/images/img_principal.jpg";
import Image from "next/image";
import styles from "./Card.module.css";
function CardReseña(props) {
  return (
    <a
      className={styles.link}
      href="/crema-corporal-reafirmante-sol-de-janeiro-brazilian-bum-bum-cream"
    >
      <article className="flex justify-content-end align-items-center flex-col shadow-2xl">
        <Image src={Logo} className="w-full" alt="Imagen Plan Funerario" />
        <h3 className={`${styles.h3} ml-4`}>Titulo Reseña</h3>
        <p className={`md:block hidden pt-[0px]`}>
          {" "}
          Este producto ha sido cuidadosamente formulado para ofrecer resultados
          visibles. Ideal para quienes buscan reafirmar y mejorar la apariencia
          de la piel con ingredientes efectivos y de alta calidad.
        </p>
      </article>
    </a>
  );
}

export default CardReseña;
