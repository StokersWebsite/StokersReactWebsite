/* eslint-disable */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


const HomeContent = () => (

    <div className="next-steps">

        <h2 className="my-5 text-center">Wat is er allemaal op de site te vinden?</h2>

        <div className="row">
            <div className="col-md-5 mb-4">
                <h6 className="mb-3">
                      Profile
                      <NavLink
                        to="/profile"
                        exact
                        className="nav-link"
                        activeClassName="router-link-exact-active"
                      >
                    </NavLink>
                </h6>
                <p>
                    Op deze site kun je zien wat de stokers allemaal doen, door middel van foto's
                </p>
            </div>

            <div className="col-md" />

            <div className="col-md-5 mb-4">
                <h6 className="mb-3">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://auth0.com/docs/multifactor-authentication"
                    >
                        <FontAwesomeIcon icon={faLink} className="mr-2" />
                        Enable Multi-Factor Authentication
                    </a>
                </h6>
            </div>

            <div className="row">
                <div className="col-md-5 mb-4">
                    <h6 className="mb-3">
                    Activiteiten
                      <NavLink
                        to="/activiteiten"
                        exact
                        className="nav-link"
                        activeClassName="router-link-exact-active"
                      >
                    </NavLink>
                    </h6>
                    <p>
                        Ook kun je op de site zien wat de stokers allemaal nog gaan doen. En als je lid bent kun je je ook inschrijven om mee te doen.
                    </p>
                </div>

                <div className="col-md" />

                <div className="col-md-5 mb-4">
                    <h6 className="mb-3">
                    </h6>
                    <p>
                        Deze front-end is gemaakt in React JS. 
                    </p>
                </div>
            </div>
        </div>
    </div>
        );

        export default HomeContent;
