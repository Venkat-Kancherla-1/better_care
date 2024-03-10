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
        <p className="text-4xl font-bold text-center mt-8 mb-4 text-gray-800">Discover Our Featured Content</p>

        <br />
        <section className=""> <Cards/>  </section>
        <Footer/>
     </main>
  )
}

export default Home