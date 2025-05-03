import React from 'react';
import Image from "next/image";
import Logo from "../../../public/images/logo_cremas.jpg";
import "./Menu.css";
import Link from 'next/link';
function Menu() {
    return (
        <nav className={`navBar shadow-xl`}>
        <div className={`navContainer flex md:justify-start justify-center`}>
          <Link className="navbar-brand" href="/">
            {" "}
            <Image
              id="logo"
              src={Logo}
              alt="Imagen Plan Funerario"
              priority
            />
          </Link>
          <div className="md:flex hidden" id="navbarNav">
            <ul className="flex">
              <li className="boton-nav">
                <a className="" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="boton-nav">
                <a className="" href="#">
                  Tipos
                </a>
                <ul>
                    <li><Link href="/mejores-cremas-hidratantes">Hidratantes</Link></li>
                    <li><Link href="/reafirmantes">Reafirmantes</Link></li>
                </ul>
              </li>
              <li className="boton-nav invisible">
                <a className="" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Menu;