import React from 'react';
import styles from "./Productos.module.css"
function ProsCons({pros, cons, left}) {
    return (
        <div
          className={`${styles.prosCons} mt-[0.5rem] mb-[1rem] flex justify-content-center md:flex-row flex-col`}
        >
          <div className={`${styles.pros}`}>
            <p className='text-white'>Pros</p>
            <ul>
                {
                    pros?.map((item,i) => {
                        return (
                            <li key={i} className={`${ left ? "text-white" : "text-[#895C24]"}`}>
                                {item}
                          </li>
                        )
                    })
                }
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
            {
                    cons?.map((item,i) => {
                        return (
                            <li key={i} className={`${ left ? "text-white" : "text-[#895C24]"}`}>
                                {item}
                          </li>
                        )
                    })
                }
              <li className={`before:content-['\\2717'] ${ left ? "text-white" : "text-[#895C24]"}`}> contra hsdghsd hshdjs hgsdgshd sgdhsgd gshdgshgd hgsdgsjdhsj
                hashdjahdjahd hajshajhs ahjah4
              </li>
            </ul>
          </div>
        </div>
    );
}

export default ProsCons;