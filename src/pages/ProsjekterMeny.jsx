import { NavLink, Outlet } from "react-router-dom"

export function ProsjekterMeny() {
    return (
        <>
            <div className="ProjectsLayout">
                <NavLink to="/Prosjekter/TNG">TNG</NavLink>
                <NavLink to="/Prosjekter/Mars">Mars</NavLink>
                <NavLink to="/Prosjekter/Trommemaskin">Trommemaskin</NavLink>
                <NavLink to="/Prosjekter/Hundemat">Hundemat</NavLink>
                <NavLink to="/Prosjekter/Nyhetsartikler">Nyhetsartikler</NavLink>
            </div>
            <Outlet />
        </>
    )
}