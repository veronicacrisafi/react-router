import { Outlet } from "react-router-dom"
import AppHeader from "./AppHeader"
import AppFooter from "./AppFooter"

export default function Layout() {
    return (
        <>
            <AppHeader />
            <main className="my-5">
                <Outlet />
            </main>
            <AppFooter />
        </>
    )
}