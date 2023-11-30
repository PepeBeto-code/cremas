import React from 'react';
import Logo from "../../../public/images/img_principal.jpg";
import Image from 'next/image';
import styles from "./Card.module.css"
function CardReseña(props) {
    return (
        <article className='flex justify-content-end align-items-center flex-col shadow-2xl'>
            <Image
              src={Logo}
              className='w-full'
              alt="Imagen Plan Funerario"
            />
            <h3>Titulo Reseña</h3>
            <p className={styles.texto}>gsnshj jhsjhsjhdsj jhsjhsjhdsj
                hsjhjhs hjdshjsh hsjhdjsdhjss hs hsjshjhdssd
                jshjshds hd jhsjh hsj hsjhdjhs hsdjhsd hs
            </p>
            <a className={styles.link} href='#'>Leer Mas</a>
        </article>
    );
}

export default CardReseña;