import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import {
  HomePage,
  Portfolio,
  Publications,
  Resume,
  Certifications,
  Blog,
  TransferLearning,
  KNearestNeighbors,
  SupportVectorMachines,
  KernelTrick,
  CNNvsRNN,
  StudyJourney,
} from "./containers";
import "./App.scss";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
        </div>
        <Routes>
          <Route path="/portfolio-website" element={<HomePage />} />
          <Route path="/portfolio-website/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio-website/publications"
            element={<Publications />}
          />
          <Route
            path="/portfolio-website/certifications"
            element={<Certifications />}
          />
          <Route path="/portfolio-website/resume" element={<Resume />} />
          <Route path="/portfolio-website/blog" element={<Blog />} />
          <Route
            path="/portfolio-website/transfer-learning"
            element={<TransferLearning />}
          />
          <Route
            path="/portfolio-website/k-nearest-neighbors"
            element={<KNearestNeighbors />}
          />
          <Route
            path="/portfolio-website/support-vector-machines"
            element={<SupportVectorMachines />}
          />
          <Route
            path="/portfolio-website/kernel-trick"
            element={<KernelTrick />}
          />
          <Route path="/portfolio-website/cnn-vs-rnn" element={<CNNvsRNN />} />
          <Route
            path="/portfolio-website/learning-journey"
            element={<StudyJourney />}
          />
        </Routes>
      </div>
    </>
  );
}
export default App;

// const App = () => {
//   return (
//     <Router>
//       <div className="App">
//         <div className="gradient__bg">
//           <Navbar />
//           <Header />
//         </div>
//         <HomePage />
//         <About />
//         <Interests />
//         <Experience />
//         <Projects />
//         <Portfolio />
//         <Skills />
//         <Footer />
//       </div>
//       {/* <Routes>
//         <Route path="/portfolio" element={<Portfolio />} />
//       </Routes> */}
//     </Router>
//   );
// };
