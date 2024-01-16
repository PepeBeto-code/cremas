import React from 'react';
import Logo from "../../../public/images/img_principal.jpg";
import Image from 'next/image';
import styles from "./Card.module.css"
function CardReseña(props) {
    return (
        <a className={styles.link} href='/reafirmantes'>
        <article className='flex justify-content-end align-items-center flex-col shadow-2xl'>
            <Image
              src={Logo}
              className='w-full'
              alt="Imagen Plan Funerario"
            />
            <h3 className={`${styles.h3}`}>Titulo Reseña</h3>
            <p className={`md:block hidden pt-[0px]`}>gsnshj jhsjhsjhdsj jhsjhsjhdsj
                hsjhjhs hjdshjsh hsjhdjsdhjss hs hsjshjhdssd
                jshjshds hd jhsjh hsj hsjhdjhs hsdjhsd hs
            </p>
            
        </article>
        </a>
    );
}

export default CardReseña;