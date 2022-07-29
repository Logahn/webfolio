import React from 'react'
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work} from './containers';

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