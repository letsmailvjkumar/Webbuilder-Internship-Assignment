import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'

function App() {
 
  return (
    <>
      <div >
      <Navbar />
      </div>
      <div className=' max-w-[1080px] mx-auto my-5'>
        <Hero />
      </div>
      <div className=' max-w-[1080px] mx-auto my-10'>
        <NewsLetter />
      </div>
      <div className='bg-[rgb(33,39,49)] text-white mt-10' >
        <Footer />
      </div>
    </>
  )
}

export default App
