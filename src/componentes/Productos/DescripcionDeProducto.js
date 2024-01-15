import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { VscChromeClose } from "react-icons/vsc";
import styles from "./Productos.module.css"
function DescripcionDeProducto({product, left}) {
    return (
        <div
        className={`${styles.contenedor} flex justify-content-center align-items-center flex-col`}
      >
        <div className={`flex md:flex-row  flex-col ${left ? "md:flex-row-reverse ":""}`}>
        <Image
          className="m-auto"
          src={product.img}
          width={150}
          height={150}
          alt="La Mejor Crema Para Reafirmar La Piel"
        />
        <div>
        <p className={`${ left ? "text-white" : "text-[#895C24]"} ${styles.p} md:mt-[4rem] mt-[2rem]`}>
          {product.descripcion}
        </p>
        <div
          className={`${styles.prosCons} ${ left ? "bg-[#6E471B]" : ""} m-[0.5rem] p-[1rem] flex justify-content-center flex-row`}
        >
          <div className={`${styles.pros}`}>
            <h3 className={` ${ left ? "text-white" : "text-[#895C24] border-[#895C24]"} text-start m-[0px] border-b`}>Pros</h3>
            <ul className='flex flex-col align-items-center'>
              <div className='w-fit'>
              {
                  product.pros.map((e,i) => {
                    return (
                      <li key={i} className={`p-[0.5rem] ${ left ? "text-white" : "text-[#895C24]"}`}>
                        &#10004; {e}
                    </li>
                    )
                  })
                }
              </div>
            </ul>
          </div>
          <div className={`${styles.cons}`}>
            <h3 className={` ${ left ? "text-white" : "text-[#895C24] border-[#895C24]"} text-start m-[0px] border-b`}>Contras</h3>
            <ul className='flex flex-col align-items-center'>
              <div className='w-fit'>
              {
                product.contras.map((e,i) => {
                  return (
                    <li key={i} className={`p-[0.5rem] ${ left ? "text-white" : "text-[#895C24]"}`}> 
                     &#10006; {e}
                  </li>
                  )
                })
              }
              </div>
            </ul>
          </div>
        </div>
        </div>
        </div>

        <Link href="/crema-corporal-reafirmante-sol-de-janeiro-brazilian-bum-bum-cream" className={`${ left ? "text-white" : "text-[#895C24]"}`}>Leer Reseña Completa</Link>
      </div>
    );
}

export default DescripcionDeProducto;