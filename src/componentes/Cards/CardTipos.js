import React, { lazy } from 'react';
import Image from 'next/image';
import Logo from "../../../public/images/img_principal.jpg"
function CardTipos(props) {
    return (
        <article className='relative h-[500px] flex justify-content-end align-items-center flex-col mr-[1em]'>
            <figure className='absolute w-full h-full  z-[-1]'>
            <Image
              className='h-full'
              src={Logo}
              alt="Imagen Plan Funerario"
            />
            </figure>
            <h3>Titulo De Tipo De Crema</h3>
            <p>jahajhjhsj dhjhjshjhsjhj shjshjhj hsdjhdsjh djhsj shjhsjhjs shjs
                hashsjhaaaaa aaaaajhjshjahjah abjhajhsajhsa hahsjhsjh jjdchsjc hahsjhs jhjjdchsjc
                ashagadhgajdha
            </p>
        </article>
    );
}

export default CardTipos;