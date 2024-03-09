import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Cards from './Cards'
function Home() {
  return (
     <main className='relative'>
        <Header/>
        <section className=""> <Hero/>  </section>
        <br />
        <section className=""> <Cards/>  </section>
        <Footer/>
     </main>
  )
}

export default Home