import { Outlet } from "react-router-dom"
import { NavBar } from "../components/Navbar"

export const RouterLayout: React.FC <{}> = () => {
    return (
        <>
        <NavBar />
        <Outlet />
        </>
    )
}