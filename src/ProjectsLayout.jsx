import { NavLink, Outlet } from "react-router-dom"

export function ProjectsLayout() {
    return (
        <>
            <div className="ProjectsLayout">
                <NavLink to="/Projects/RNG">RNG</NavLink>
                <NavLink to="/Projects/Mars">Mars</NavLink>
                <NavLink to="/Projects/Drumpad">Drumpad</NavLink>
                <NavLink to="/Projects/Dogfood">Dogfood</NavLink>
                <NavLink to="/Projects/Newsfeed">Newsfeed</NavLink>
            </div>
            <Outlet />
        </>
    )
}