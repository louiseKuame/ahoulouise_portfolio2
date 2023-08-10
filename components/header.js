'Use client'

import React from "react"
import { Link } from "react-router-dom"
import style from  "@/public/css/style.css"

function Header(){
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                         <span className="icon-bar"></span>
                         <span className="icon-bar"></span>
                         <span className="icon-bar"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li>
                           <Link to="/">Moi</Link>
                        </li>
                        <li>
                            <Link to="/temoignage">Témoignages</Link>
                        </li>
                        <li>
                            <Link to="/projet1">Projet1</Link>
                        </li>
                        <li>
                            <Link to="/projet2">Projet2</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Header;


    