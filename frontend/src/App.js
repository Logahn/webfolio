import React from 'react'
import { Article, Brand, CTA, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatPort} from './containers';

const App = () => {
  return (
    <div classname = "App">
      <div classname = "gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatPort />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App