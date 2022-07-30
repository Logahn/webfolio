import React from 'react'
import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work} from './containers';
import './App.scss';


const App = () => {
  return (
    <div classname = "App">
      <div classname = "gradient__bg">
        <Navbar />
        <Header />
      </div>
      <About />
      <Footer />
      <Header />
      <Skills />
      <Testimonial />
      <Work />
    </div>
  )
}

export default App