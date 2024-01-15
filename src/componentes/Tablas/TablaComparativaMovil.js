import React from "react";
import Image from "next/image";
import "./Table.css";

function TablaComparativaMovil({ product, one }) {
  return (
    <div className={`table-wrap md:hidden block`}>
      <table className={`border-3 ${one ? "border-[#895C24]" : ""}`}>
        <thead>
          <tr>
            <td></td>
            <th>
              <Image
                className={`m-auto`}
                src={product.img}
                width={50}
                height={50}
                alt="Imagen Plan Funerario"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="dataColor">
            <th>
              Producto{" "}
              <span className="description sr-only">
                This is the cash we currently have on hand.
              </span>
            </th>
            <td>{product.nombre}</td>
          </tr>
          <tr className="">
            <th>
              Destacado por{" "}
              <span className="description sr-only">
                This is the cash we currently have on hand.
              </span>
            </th>
            <td>{product.destacado}</td>
          </tr>
          <tr className="dataColor">
            <th>
              Ideal para{" "}
              <span className="description sr-only">
                Our primary transactional account.
              </span>
            </th>
            <td>{product.para}</td>
          </tr>
          <tr className="">
            <th>
              Tipo De Piel <span className="sr-only">Assets</span>
            </th>
            <td>{product.piel}</td>
          </tr>
          <tr className="dataColor">
            <th>
              Se usa para{" "}
              <span className="description sr-only">
                Funds set aside for emergencies.
              </span>
            </th>
            <td>{product.cant}</td>
          </tr>
          <tr className="">
            <th>
              Ingredientes <span className="sr-only">Assets</span>
            </th>

            <td>{product.ingr}</td>
          </tr>
          <tr className="dataColor">
            <th>
              Calificacion De Usuarios <span className="sr-only">Assets</span>
            </th>
            <td>{product.cal}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TablaComparativaMovil;
