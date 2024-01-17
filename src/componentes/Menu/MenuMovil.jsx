"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../../../public/images/logo_cremas.jpg";
import Image from "next/image";
import { rutasPrincipales } from "@/variables/VariablesDeRuta";
import MenuBoton from "./MenuBoton";

function MenuMovil() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className={`fixed-top`}>
     <MenuBoton active={active} onClick={handleClick}/>

      {/* <button
        className=" inline-flex p-3 m-[2rem] bg-white icon_burguer rounded-full lg:hidden text-white ml-auto hover:text-white outline-none"
        onClick={handleClick}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // className='text-[#EBBA00]'
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button> */}

      <nav
        className={`${
          active ? "menu-visible" : "menu-hidden"
        } flex flex-col items-center bg-white p-3 nav-burguer`}
      >
        <Link className="navbar-brand p-[1rem]" href="/">
          {" "}
          <Image
            id="logo"
            className=""
            width={150}
            height={100}
            src={Logo}
            alt="Imagen Plan Funerario"
            priority
          />
        </Link>
          <div className="flex flex-col items-start w-full h-auto">
            {rutasPrincipales.map((e, i) => {
              return (
                <Link
                  className="w-full text-center text-[1.5rem] no-underline px-3 py-2 rounded text-[#6E471B] font-bold items-center justify-start hover:bg-[#6E471B] hover:text-white "
                  href={e.path}
                  key={i}
                >
                  {e.title}
                </Link>
              );
            })}
          </div>
      </nav>
    </header>
  );
}

export default MenuMovil;
