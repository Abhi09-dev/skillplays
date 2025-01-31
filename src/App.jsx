import { useState } from 'react'
import './App.css'
import './font.css'
import Header from './components/header'
import Footer from './components/footer'
import Faqs from './components/Faqs'
import Testimonials from './components/Testimonials'
import Banner from './components/Banner'
import ExpSkill from './components/ExpSkill'
import CreativeScreen from './components/CreativeScreen'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div>
        <Banner />
        <Testimonials />
        <Faqs />
        <ExpSkill />
        <CreativeScreen />
      </div>
      <Footer />
    </>
  )
}

export default App
