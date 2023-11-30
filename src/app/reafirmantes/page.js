import React from "react";
import styles from "./Reafirmantes.module.css";
import Img from "../../../public/images/mejor_crema_reafirmante.png";
import Img2 from "../../../public/images/mejor_crema_reafirmante2.png";
import Image from "next/image";
import Link from "next/link";
import DescripcionDeProducto from "@/componentes/Productos/DescripcionDeProducto";
import { Container } from "reactstrap";

const top6 = [
  {
    img: Img,
    descripcion:
      "La Sol de Janeiro Brazilian Bum Bum Cream es más que una simple crema corporal. Es una invitación a experimentar la vibrante cultura de Brasil desde la comodidad de tu hogar. Esta crema es famosa por su textura rica y sedosa que se funde en la piel, dejando un acabado aterciopelado sin residuos grasos. Aunque algunos usuarios han mencionado que el efecto reafirmante es temporal, la crema es apreciada por su capacidad para mejorar la apariencia de la piel y su agradable aroma.",
  },
  {
    img: Img2,
    descripcion:
      "Esta crema es una opción popular para aquellos que buscan una crema corporal reafirmante. La fórmula de Clarins Extra-Firming Body Cream está enriquecida con ingredientes de plantas que ayudan a reafirmar y renovar la piel. Además de mejorar la apariencia de la piel, esta crema también proporciona una hidratación intensa, dejando la piel suave y flexible.",
  },
  {
    img: Img2,
    descripcion:
      "Nivea es una marca conocida por sus productos de cuidado de la piel de alta calidad. Su loción corporal reafirmante Q10 Plus no es una excepción. Esta loción está formulada con coenzima Q10, un ingrediente que se sabe que mejora la elasticidad de la piel. Además de su efecto reafirmante, esta loción también proporciona una hidratación intensa, mejorando la apariencia de la piel seca.",
  },
  {
    img: Img2,
    descripcion:
      "Este producto es conocido por su capacidad para proporcionar un efecto tensor en la piel. Aunque algunos usuarios han mencionado que el producto tiene un olor desagradable, muchos están dispuestos a pasar por alto este hecho debido a los resultados visibles que proporciona este producto.",
  },
  {
    img: Img2,
    descripcion: "",
  },
  {
    img: Img2,
    descripcion: "",
  },
];

function page() {
  return (
    <main>
      <div
        id={styles.imgPrincipal}
        className="flex md:flex-row flex-col md:h-[70vh] "
      >
        <section className="flex justify-content-center align-items-start flex-col md:mt-[0%] mt-[5rem]">
          <h1 className="text-white">
            Las Mejores Cremas Corporales Reafirmantes
          </h1>
          <p className={`${styles.p}`}>
            ¿Estás buscando un Reafirmante Corporal que no solo hidrate tu piel,
            sino que también la deje firme y tonificada? ¡Estás en el lugar
            correcto! Hemos investigado y comparado numerosas cremas
            reafirmantes para el cuerpo disponibles en el mercado, teniendo en
            cuenta factores como los ingredientes, las reseñas de los usuarios,
            el precio y la reputación de la marca. Como resultado, hemos
            seleccionado las 6 mejores cremas reafirmantes que puedes encontrar
            en el mercado hoy en día. Y la número uno de nuestra lista es sin
            duda la Clarins Extra-Firming Body Cream. ¡No esperes más, pruébala
            hoy mismo!
          </p>
        </section>
        <section className="flex justify-content-center align-items-center flex-col md:w-[50%] w-[100%]">
          <h2 className={`${styles.h2}`}>
            La Mejor Crema Para Reafirmar La Piel
          </h2>
          <Image
            src={Img}
            width={300}
            height={300}
            alt="La Mejor Crema Para Reafirmar La Piel"
          />
        </section>
      </div>

      <div className="flex items-center flex-col">
        <section className="flex items-center flex-col">
          <h2>¿Por qué elegir Cremas Reafirmantes?</h2>
          <p>
            Con el paso del tiempo, nuestra piel puede perder su firmeza y
            elasticidad. Las cremas corporales reafirmantes están diseñadas para
            combatir este problema, ayudando a tensar y tonificar la piel para
            un aspecto más juvenil.
          </p>
        </section>

        <section className="w-[100%] bg-[#895C24] text-white">
          <h2>
            1.-Sol de Janeiro Brazilian Bum Bum Cream: La crema reafirmante con
            textura sedosa
          </h2>
          <DescripcionDeProducto product={top6[0]} left={true} />
        </section>

        <section className="w-[100%]">
          <h2>
            2.-Clarins Extra-Firming Body Cream: La crema reafirmante con
            ingredientes de plantas
          </h2>
          <DescripcionDeProducto product={top6[1]} />
        </section>

        <section className="w-[100%] bg-[#895C24] text-white">
          <h2>
            3.-Nivea Q10 Plus Skin Firming Hydration Body Lotion: La loción
            reafirmante con coenzima Q10
          </h2>
          <DescripcionDeProducto product={top6[2]} left={true} />
        </section>

        <section className="w-[100%]">
          <h2>
            4.-Perricone MD Cold Plasma Plus+ Body: El producto reafirmante con
            efecto tensor
          </h2>
          <DescripcionDeProducto product={top6[3]} />
        </section>

        <section className="flex items-center flex-col">
          <h2>
            Guía de Compra para Cremas Corporales Reafirmantes: Encuentra la
            Mejor para Tu Piel
          </h2>
          <p>
            Cuando se trata de cuidar tu piel, una crema corporal reafirmante
            puede ser un gran aliado. Estas cremas están diseñadas para mejorar
            la elasticidad de la piel, reducir la apariencia de la celulitis y
            dejar tu piel suave y radiante. Pero con tantas opciones en el
            mercado, ¿cómo puedes saber cuál es la mejor para ti? Aquí te
            presentamos una guía de compra para ayudarte a tomar la decisión
            correcta en tu busqueda de una crema para la flacidez.
          </p>
          <div className="pl-[2em]">
            <h3 className="text-start"> 1. Ingredientes Activos</h3>
            <p>
              Busca ingredientes que promuevan la producción de colágeno y
              elastina, como retinol y péptidos. Estos ingredientes ayudan a
              mejorar la elasticidad y firmeza de la piel.
            </p>
            <h3 className="text-start">2. Hidratantes</h3>
            <p>
              Las cremas reafirmantes que contienen hidratantes pueden ayudar a
              mantener la piel suave y flexible. Busca ingredientes como ácido
              hialurónico, glicerina o manteca de karité.
            </p>
            <h3 className="text-start">3. Tipo de Piel</h3>
            <p>
              Asegúrate de elegir un producto que sea adecuado para tu tipo de
              piel. Algunas cremas pueden ser demasiado pesadas para las pieles
              grasas, mientras que otras pueden no ser lo suficientemente
              hidratantes para las pieles secas.
            </p>
            <h3 className="text-start">4. Opiniones de los Usuarios</h3>
            <p>
              Las opiniones de los usuarios pueden proporcionarte información
              valiosa sobre la eficacia de la crema. Sin embargo, recuerda que
              cada persona es única y lo que funciona para una persona puede no
              funcionar para otra.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default page;
