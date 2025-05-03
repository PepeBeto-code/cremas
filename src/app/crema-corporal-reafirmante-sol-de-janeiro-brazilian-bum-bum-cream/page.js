import ProsCons from "@/componentes/Productos/ProsCons";
import React from "react";

function page() {
  const pros = [
    "Su aroma a caramelo salado es maravilloso.",
    "Está pensada para absorberse muy rápido, como una loción.",
    "Deja la piel con un acabado super favorecedor, además, ayuda a cerrar los poros, mejorando también su textura.",
    "Su fórmula es vegana y tampoco contiene ni gluten ni parabenos.",
  ];

  const cons = [
    "Algunos usuarios han mencionado que aunque la piel se siente más tensa y suave al momento de la aplicación, horas más tarde, la piel vuelve a su estado original.",
  ];
  return (
    <main className="flex justify-content-center items-center flex-col">
      <h1 className="mt-4">
        Sol de Janeiro Brazilian Bum Bum Cream: Un viaje tropical para tu piel
      </h1>
      <p>
        La Sol de Janeiro Brazilian Bum Bum Cream es más que una simple crema
        corporal. Es un viaje a las playas de Río, un baile de carnaval en un
        frasco, y una explosión de hidratación para tu piel.
      </p>

      <section>
        <h2>
          Pros y contras de la Crema Sol de Janeiro Brazilian Bum Bum Cream
        </h2>
        <ProsCons pros={pros} cons={cons} />
      </section>

      <section>
        <h2>Ingredientes estrella</h2>
        <p>
          Esta crema corporal brasileña es famosa por su fórmula galardonada,
          infundida con guaraná rico en cafeína y una mezcla brasileña de
          ingredientes que aman la piel. La guaraná, conocida por su alto
          contenido de antioxidantes y propiedades antiinflamatorias, ayuda a
          reparar el daño a la barrera cutánea y a reducir la celulitis. Además,
          contiene cinco veces más cafeína que el café, lo que aporta muchos
          beneficios adicionales para la salud de la piel.
        </p>
      </section>
      <section>
        <h2>Beneficios para la piel</h2>
        <p>
          La Brazilian Bum Bum Cream es de rápida absorción y combate tanto la
          pérdida de firmeza y elasticidad de la piel, así como la opacidad y
          textura desigual. Es adecuada para todos los tipos de piel, ya sea
          normal, grasa, seca o sensible.
        </p>
      </section>

      <section className="flex  flex-col">
        <h2>¿Como Se Usa?</h2>
        <p>
          1.-Aplica la crema con los dedos en las áreas con celulitis; estómago,
          brazos, glúteos y cualquier otra área problemática.
        </p>
        <p>2.-Masajea tu piel hasta que se absorba por completo.</p>
      </section>
    </main>
  );
}

export default page;
