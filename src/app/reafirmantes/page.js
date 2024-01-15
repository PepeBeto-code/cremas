import React from "react";
import styles from "./Reafirmantes.module.css";
import Img from "../../../public/images/mejor_crema_reafirmante.png";
import Img2 from "../../../public/images/mejor_crema_reafirmante2.png";
import Image from "next/image";
import DescripcionDeProducto from "@/componentes/Productos/DescripcionDeProducto";
import TableComparativa from "@/componentes/Tablas/TableComparativa";
import Nivea from "../../../public/images/nivea_reafirmante.png";
import Isdn from "../../../public/images/isdn.png";
import Cicatricure from "../../../public/images/cicatricure.png";
import FAQ from "@/componentes/Accordion/FAQ";
import TablaComparativaMovil from "@/componentes/Tablas/TablaComparativaMovil";

const top = [
  {
    img: Nivea,
    nombre: "Nivea Q10 Firming Body Lotion",
    destacado:
      "Fórmula con Coenzima Q10, hidratación profunda, mejora la elasticidad de la piel, precio asequible.",
    para: "Aquellos que buscan una opción efectiva y accesible para el cuidado diario de la piel.",
    piel: "Seca, Sensible, Todas, Normal",
    cant: "Todo el Cuerpo, Pies, Manos, Rostro",
    ingr: "Q10, vitamina C",
    cal: "4.7 / 5",
    descripcion: 
    " Experimenta la transformación de tu piel con Nivea Q10 Firming Body Lotion. Enriquecida con la potente combinación de coenzima Q10 y creatina, esta lujosa loción corporal no solo hidrata profundamente, sino que también revitaliza y tonifica tu piel, devolviéndole su elasticidad natural. Despídete de la preocupación por la pérdida de firmeza, ya que esta fórmula avanzada trabaja en armonía con tu piel para reducir la apariencia de la celulitis y mejorar visiblemente la firmeza en tan solo semanas. Cada aplicación es un paso hacia una piel más suave, tersa y rejuvenecida. Descubre el secreto para una piel radiante y compra tu Nivea Q10 Firming Body Lotion hoy mismo.",
    title: "Nivea Q10 Firming Body Lotion: La lociónreafirmante con coenzima Q10",
    pros: ["Es una opción accesible y fácilmente disponible.","Proporciona hidratación profunda y mejora la elasticidad.","Contiene Coenzima Q10, un antioxidante beneficioso para la piel."],
    contras: ["Algunas personas pueden preferir una fragancia más distintiva."],
  },
  {
    img: Isdn,
    nombre: "Woman Isdin Crema Reafirmante",
    destacado:
      "Reafirmación de la piel, fórmula específica para combatir la flacidez.",
    para: "Personas que buscan una crema específicamente diseñada para reafirmar la piel.",
    piel: "Todas",
    cant: "Piel",
    ingr: "Aceite de rosa",
    cal: "4.8 / 5",
    descripcion:
    "Experimenta la indulgencia definitiva en cuidado corporal con Woman Isdin Crema Reafirmante. Formulada con ingredientes premium, como el colágeno marino y el ácido hialurónico, esta crema no solo proporciona una hidratación intensa, sino que también revitaliza y tonifica tu piel, restaurando su firmeza y elasticidad. Di adiós a la preocupación por la flacidez, ya que esta fórmula avanzada trabaja en sinergia con tu piel para combatir los signos del envejecimiento. Cada aplicación es un regalo para tu piel, llevándote un paso más cerca de una apariencia rejuvenecida y radiante. Descubre el secreto para una piel firme y compra Woman Isdin Crema Reafirmante hoy mismo.",
    title: "Descubre la Firmeza que Mereces con Woman Isdin Crema Reafirmante",
    pros: ["Específicamente diseñada para reafirmar la piel.","Se absorbe fácilmente en la piel."],
    contras: ["Dependiendo de la ubicación, puede no estar disponible en todas partes."],
  },
  {
    img: Cicatricure,
    nombre: "Cicatricure GOLD LIFT Serum Facial",
    destacado:
      "Serum facial con ingredientes anti-envejecimiento y tecnología de péptidos.",
    para: "Aquellos que buscan un producto enfocado en el rejuvenecimiento facial y reducción de líneas finas.",
    piel: "Todas",
    cant: "Rostro",
    ingr: "Con Péptidos con Oro Calcio y Silicio",
    cal: "4.6 / 5",
    descripcion: 
    "Eleva tu rutina de cuidado facial a nuevas alturas con Cicatricure GOLD LIFT Serum Facial. Este suero lujoso, enriquecido con colágeno, ácido hialurónico y partículas de oro, redefine la experiencia del antienvejecimiento. Experimenta una hidratación profunda, una firmeza rejuvenecida y una luminosidad dorada que transformarán tu piel. Cada gota de este suero innovador trabaja en armonía con tu piel, reduciendo visiblemente la apariencia de líneas finas y arrugas. Descubre la esencia del rejuvenecimiento cutáneo con Cicatricure GOLD LIFT, tu aliado elegante para una piel radiante y revitalizada. Eleva tu belleza con cada aplicación y experimenta el lujo de Cicatricure GOLD LIFT hoy mismo.",
    title: "Eleva tu Belleza con Elegancia: Cicatricure GOLD LIFT Serum Facial",
    pros: ["Contiene ingredientes anti-envejecimiento como péptidos y antioxidantes.","Ideal para su uso como un serum facial."],
    contras: ["No es específicamente una crema corporal."],
  },
  // {
  //   img: Img2,
  //   nombre: "Clarins Extra-Firming Body Cream",
  //   destacado:
  //     "Fórmula extrafirme, diseñada para mejorar la firmeza y suavidad de la piel.",
  //   para: "Personas que buscan una crema que se centre en la firmeza y tonicidad de la piel.",
  //   cant: "",
  //   ingr: "Con Péptidos con Oro Calcio y Silicio",

  // },
  // {
  //   img: Img2,
  //   nombre: "Sol de Janeiro Brazilian Bum Bum Cream",
  //   destacado: "Experiencia sensorial única, fragancia tropical distintiva, mejora de la elasticidad de la piel.",
  //   para: "Aquellos que buscan una experiencia de cuidado de la piel lujosa y están dispuestos a invertir en un producto de alta gama.",
  //   cant: "",
  //   ingr: "Con Péptidos con Oro Calcio y Silicio",

  // },
  // {
  //   img: Img2,
  //   nombre: "Perricone MD Cold Plasma Plus+ Body",
  //   destacado: " Enfoque en el rejuvenecimiento de la piel, incluyendo ingredientes antienvejecimiento.",
  //   para: "Personas interesadas en tratamientos corporales avanzados y antienvejecimiento.",
  //   cant: "",
  //   ingr: "Con Péptidos con Oro Calcio y Silicio",

  // },
];

const faq = [
  {
    pregunta: "¿Cómo funcionan las cremas reafirmantes?",
    res: "Las cremas reafirmantes trabajan estimulando la producción de colágeno en la piel. El colágeno es la proteína que le da estructura a la piel y constituye aproximadamente el 70-80% del cuerpo"
  },
  {
    pregunta: "¿Qué ingredientes busco en una crema reafirmante?",
    res: "Algunos de los ingredientes más efectivos en las cremas reafirmantes incluyen retinol (vitamina A), que es el ingrediente más efectivo para estimular la producción de colágeno y reafirmar la piel."
  },
  {
    pregunta: "¿Dónde debo aplicar mi crema reafirmante?",
    res: "Las cremas reafirmantes se pueden aplicar en cualquier parte del cuerpo donde desees mejorar la firmeza de la piel. Esto puede incluir áreas como los brazos, el abdomen, los muslos y los glúteos"
  },
  {
    pregunta: "¿Las cremas reafirmantes pueden ayudar a reducir la celulitis?",
    res: "Si bien las cremas reafirmantes pueden ayudar a mejorar la firmeza de la piel, no están diseñadas para ser un método de pérdida de peso y solo pueden hacer tanto cuando se trata de celulitis"
  },
  {
    pregunta: "¿Cuánto tiempo tardan las cremas reafirmantes en mostrar resultados?",
    res: "Los resultados pueden variar dependiendo del producto y del individuo, pero algunos usuarios han notado que su piel se volvió más firme después de dos semanas de uso"
  },
  {
    pregunta: "¿Las cremas reafirmantes son seguras para todo tipo de piel?",
    res: "La mayoría de las cremas reafirmantes son seguras para todo tipo de piel. Sin embargo, si tienes piel sensible o alguna preocupación específica sobre tu piel, sería mejor consultar a un dermatólogo antes de probar un nuevo producto"
  },
]

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
          <h2>
            Guía de Compra para una Crema Reafirmante Corporal Reafirmantes: Encuentra la
            Mejor para Tu Piel
          </h2>
          <p className="pl-[0px] pr-[0px]">
            Cuando se trata de cuidar tu piel, un reafirmante corporal
            puede ser un gran aliado. Estas cremas están diseñadas para mejorar
            la elasticidad de la piel, reducir la apariencia de la celulitis y
            dejar tu piel suave y radiante. Pero con tantas opciones en el
            mercado, ¿cómo puedes saber cuál es la mejor para ti? Aquí te
            presentamos una guía de compra para ayudarte a tomar la decisión
            correcta en tu busqueda de una crema para la flacidez.
          </p>
          <div className="md:pl-[2em]">
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
        <section className="w-[70%] mr-auto ml-auto">
          <p className="m-auto text-center font-bold text-[32px]">Preguntas Frecuentes</p>
          <FAQ faq={faq}/>
        </section>
      </div>
    </main>
  );
}

export default page;
