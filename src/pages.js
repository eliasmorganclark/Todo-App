import React from "react";
import {Link, useLocation, Outlet } from "react-router-dom";



export function Home(){
    // useEffect(() => {retrieveData();}, []);
    return (
        <div>
            <h1> Company Website! </h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events"> Eventes</Link>
                <Link to="contact"> Contact</Link>
            </nav>
            <section>

            </section>
        </div>
    );
}

export function About() {
    return(
        <div>
            <h2> About us </h2>
            <Outlet />
            
        </div>

    );
}

export function Services() {
    return (
        <div>
            <h2> Our Services Suck! </h2>
        </div>
    )
}

export function CompanyHistory() {
    return (
        <div>
            <h2> Our Company History is Bad! </h2>
        </div>
    )
}

export function Location() {
    return (
        <div>
            <h2> Our location is hell! </h2>
        </div>
    )
}

export function Events(){
    return (
        <div>
            <h1> Eventes </h1>
        </div>
    );
}

export function Contact(){
    return (
        <div>
            <h1> Contact ????????? </h1>
        </div>
    );
}


export function FuckedUp(){
    let location = useLocation();
    return(
        <div>
            <h1> NO. Resource isn't at {location.pathname}! </h1>
        </div>
    )
}