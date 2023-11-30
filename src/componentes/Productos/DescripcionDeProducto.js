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
          width={300}
          height={300}
          alt="La Mejor Crema Para Reafirmar La Piel"
        />
        <div>
        <p className={`${ left ? "text-white" : "text-[#895C24]"} ${styles.p} md:mt-[4rem] mt-[2rem]`}>
          {product.descripcion}
        </p>
        <div
          className={`${styles.prosCons} mt-[0.5rem] mb-[1rem] flex justify-content-center md:flex-row flex-col`}
        >
          <div className={`${styles.pros}`}>
            <p className='text-white'>Pros</p>
            <ul>
              <li className={`before:content-['\\2713'] ${ left ? "text-white" : "text-[#895C24]"}`}>

                Psjkdsj jkjdks sjkjdskjdksj sj dskdjks sjdksj kks skssjd jskjds
                jskjd
              </li>
              <li className={`before:content-['\\2713'] ${ left ? "text-white" : "text-[#895C24]"}`}>Pro 4</li>
            </ul>
          </div>
          <div className={`${styles.cons}`}>
            <p className='text-white'>Contras</p>
            <ul>
              <li className={`before:content-['\\2717'] ${ left ? "text-white" : "text-[#895C24]"}`}> contra hsdghsd hshdjs hgsdgshd sgdhsgd gshdgshgd hgsdgsjdhsj
                hashdjahdjahd hajshajhs ahjah4
              </li>
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