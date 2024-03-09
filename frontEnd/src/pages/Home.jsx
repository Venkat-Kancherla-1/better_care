import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
function Home() {
  return (
     <main className='relative'>
        <Header/>
        <section className="xl:padding-l wide:padding-r padding-b"> <Hero/>  </section>
        <Footer/>
     </main>
  )
}

export default Home