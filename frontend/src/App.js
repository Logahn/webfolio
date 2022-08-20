import React from 'react'
import { Navbar } from './components';
import { About, Footer, Header, Experience, Skills, Testimonial, Projects, Base} from './containers';
import './App.scss';


const App = () => {
  return (
    <div classname = "App">
      <div classname = "gradient__bg">
      <Navbar />
      <Header />
      </div>
      <About />
      <Experience />
      <Projects />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
      <Base />
    </div>
  )
}

export default App;