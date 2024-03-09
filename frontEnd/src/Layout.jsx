import { Outlet } from 'react-router-dom'
import Hero from "./pages/Hero"
<section className="xl:padding-l wide:padding-r padding-b"> <Hero/>  </section>

function Layout() {
  return (
    <>
        <Header />
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
