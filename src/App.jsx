import { useState } from 'react'
import './App.css'
import './font.css'
import Header from './components/header'
import Footer from './components/footer'
import Faqs from './components/Faqs'
import Testimonials from './components/Testimonials'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <Testimonials />
        <Faqs />
      </div>
      <Footer />
    </>
  )
}

export default App
