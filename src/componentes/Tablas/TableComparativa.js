import React from 'react';
import Image from "next/image";
import "./Table.css"

function TableComparativa({products}) {
    return (
        <div className="table-wrap md:block hidden">
          <table>
            <thead>
              <tr>
                <td className={`border-e-[#895C24]`}></td>
                {
                    products.map((e,i) => {
                        return (
                            <th className={`${ i == 0 ? "border-[#895C24]" : ""}`}>
                            <Image
                              className={`m-auto`}
                              src={e.img}
                              key={i}
                              width={50}
                              height={50}
                              alt="Imagen Plan Funerario"
                            />
                          </th>
                        )
                    })
                }
              </tr>
            </thead>
            <tbody>
            <tr className="dataColor">
                <th className={`border-e-[#895C24]`}>
                  Producto{" "}
                  <span className="description sr-only">
                    This is the cash we currently have on hand.
                  </span>
                </th>
                {
                    products.map((e,i) => {
                        return (
                            <td key={i} className={`${ i == 0 ? "border-[#895C24]" : ""}`}>
                                {e.nombre}
                          </td>
                        )
                    })
                }
              </tr>
              <tr className="">
                <th className={`border-e-[#895C24]`}>
                  Destacado por{" "}
                  <span className="description sr-only">
                    This is the cash we currently have on hand.
                  </span>
                </th>
                {
                    products.map((e,i) => {
                        return (
                            <td key={i} className={`${ i == 0 ? "border-[#895C24]" : ""}`}>
                                {e.destacado}
                          </td>
                        )
                    })
                }
              </tr>
              <tr className="dataColor">
                <th className={`border-e-[#895C24]`}>
                  Ideal para{" "}
                  <span className="description sr-only">
                    Our primary transactional account.
                  </span>
                </th>
                {
                    products.map((e,i) => {
                        return (
                            <td key={i} className={`${ i == 0 ? "border-[#895C24]" : ""}`}>
                                {e.para}
                          </td>
                        )
                    })
                }
              </tr>
              <tr className="">
                <th className={`border-e-[#895C24]`}>
                  Tipo De Piel <span className="sr-only">Assets</span>
                </th>
                {
                    products.map((e,i) => {
                        return (
                            <td key={i} className={`${ i == 0 ? "border-[#895C24]" : ""}`}>
                                {e.piel}
                          </td>
                        )
                    })
                }
              </tr>
              <tr className="dataColor">
                <th className={`border-e-[#895C24]`}>
                  Se usa para{" "}
                  <span className="description sr-only">
                    Funds set aside for emergencies.
                  </span>
                </th>
                {
                    products.map((e,i) => {
                        return (
                            <td key={i} className={`${ i == 0 ? "border-[#895C24]" : ""}`}>
                                {e.cant}
                          </td>
                        )
                    })
                }
              </tr>
              <tr className="">
                <th className={`border-e-[#895C24]`}>
                  Ingredientes <span className="sr-only">Assets</span>
                </th>
                {
                    products.map((e,i) => {
                        return (
                            <td key={i} className={`${ i == 0 ? "border-[#895C24]" : ""}`}>
                                {e.ingr}
                          </td>
                        )
                    })
                }
              </tr>
              <tr className="dataColor">
                <th className={`border-e-[#895C24]`}>
                  Calificacion De Usuarios <span className="sr-only">Assets</span>
                </th>
                {
                    products.map((e,i) => {
                        return (
                            <td key={i} className={`${ i == 0 ? "border-[#895C24]" : ""}`}>
                                {e.cal}
                          </td>
                        )
                    })
                }
              </tr>
            </tbody>
          </table>
        </div>
    );
}

export default TableComparativa;