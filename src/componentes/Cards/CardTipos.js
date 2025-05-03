import React, { lazy } from "react";
import Image from "next/image";
import Logo from "../../../public/images/img_principal.jpg";

function CardTipos(props) {
  return (
    <a href="/reafirmantes" className="block no-underline">
      <article className="relative h-[500px] flex justify-content-end align-items-center flex-col mr-[1em]">
        <figure className="absolute w-full h-full  z-[-1]">
          <Image className="h-full" src={Logo} alt="Imagen Plan Funerario" />
        </figure>
        <h3>Titulo De Tipo De Crema</h3>
        <p>
          {" "}
          Esta crema está diseñada para brindar hidratación profunda y cuidado
          específico para la piel. Ideal para el uso diario, proporcionando una
          sensación de frescura y suavidad.
        </p>
      </article>
    </a>
  );
}

export default CardTipos;
