import { Outlet } from 'react-router-dom'
import Hero from "./pages/Hero"
import Header from './pages/Header'
import Footer from './pages/Footer'

function Layout() {
  return (

        <Outlet/>

  )
}

export default Layout
