import React from "react";
import styles from "../page.module.css";
import Img from "../../../public/images/nivea_reafirmante.png";
import Image from "next/image";
import DescripcionDeProducto from "@/componentes/Productos/DescripcionDeProducto";
import TableComparativa from "@/componentes/Tablas/TableComparativa";
import FAQ from "@/componentes/Accordion/FAQ";
import TablaComparativaMovil from "@/componentes/Tablas/TablaComparativaMovil";
import { faq, top } from "./variables";
import GuiaDeCompra from "./componentes/GuiaDeCompra";

function page() {
  return (
    <main>
      <div
        id={styles.imgPrincipal}
        className="flex md:flex-row flex-col md:h-[70vh] bg-[#895C24]"
      >
        <section className="flex justify-content-center align-items-start flex-col md:mt-[0%] mt-[5rem] md:w-[50%]">
          <h1 className="text-white">
            Las Mejores Cremas Corporales Reafirmantes
          </h1>
          <p className={`${styles.p} `}>
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
        <section className="flex justify-content-center align-items-center flex-col md:w-[50%] w-[100%] bg-[#6E471B]">
          <h2 className={`${styles.h2}`}>
            La Mejor Crema Para Reafirmar La Piel
          </h2>
          <Image
           className="pt-[2rem] pb-[2rem] pl-[1rem] pr-[1rem] w-[7rem]"
            src={`https://nicre.s3.amazonaws.com/reafirmantes/nivea_reafirmante.png`}
            alt="La Mejor Crema Para Reafirmar La Piel"
            width={100}
            height={100}
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

        <section className="lg:w-[70%]  md:w-[80%] md:mr-auto md:ml-auto">
          <h2>Comparativa de la mejor crema para la flacidez</h2>
          <TableComparativa products={top} />
          {
            top.map((e,i) => {
              if (i == 0 )
              return (
                 <TablaComparativaMovil key={i} product={e} one={true}/>
              );
              return(
                <TablaComparativaMovil key={i} product={e} />
              )
            })
          }
        </section>

        {
          top.map((e,i) => {
            return (
              <section key={i} className={` ${i % 2 == 0 ? "w-[100%] bg-[#895C24] text-white" : "w-[100%]"}`}>
              <h2 className="">
                {e.title}
              </h2>
              { i % 2 == 0  && <DescripcionDeProducto product={{img: e.img, descripcion: e.descripcion, pros: e.pros, contras: e.contras}} left={true} />}
              { i % 2 != 0  && <DescripcionDeProducto product={{img: e.img, descripcion: e.descripcion, pros: e.pros, contras: e.contras}} />}
            </section>
            )
          })
        }

        <section className="flex items-center flex-col container ">
           <GuiaDeCompra />
        </section>

        <section className="w-[70%] mr-auto ml-auto">
          <p className="m-auto text-center font-bold text-[32px]">Preguntas Frecuentes</p>
          <FAQ faq={faq}/>
        </section>
      </div>
    </main>
  );
}

export default page;
