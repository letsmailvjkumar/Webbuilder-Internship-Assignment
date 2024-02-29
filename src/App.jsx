import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'
import Products from './components/Products'

function App() {
 
  return (
    <>
      <div >
      <Navbar />
      </div>
      <div className='max-w-[1080px] mx-auto my-5'>
        <Hero />
      </div>
      <div className='max-w-[1080px] mx-auto my-5'>
        <Products />
      </div>
      <div className='max-w-[1080px] mx-auto my-5 mt-10'>
        <Cards />
      </div>
      <div className='max-w-[1080px] mx-auto my-10 mt-20'>
        <NewsLetter />
      </div>
      <div className='bg-[rgb(33,39,49)] text-white mt-20 pb-10' >
        <Footer />
      </div>
    </>
  )
}

export default App
