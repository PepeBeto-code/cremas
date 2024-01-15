"use client";

import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import styles from "./Faq.module.css"

function FAQ({faq}) {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
    return (
        <div>
        <Accordion open={open} toggle={toggle}>
            {
                faq.map((e,i) => {
                    return(
                        <AccordionItem key={i}>
                        <AccordionHeader targetId={String(i+1)} >
                            {e.pregunta}
                        </AccordionHeader>
                        <AccordionBody accordionId={String(i+1)}>
                          {e.res}
                        </AccordionBody>
                      </AccordionItem>
                    )
                })
            }
        </Accordion>
      </div>
    );
}

export default FAQ;