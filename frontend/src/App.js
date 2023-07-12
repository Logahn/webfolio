import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/transfer-learning" element={<TransferLearning />} />
          <Route path="/k-nearest-neighbors" element={<KNearestNeighbors />} />
          <Route
            path="/support-vector-machines"
            element={<SupportVectorMachines />}
          />
          <Route path="/kernel-trick" element={<KernelTrick />} />
          <Route path="/cnn-vs-rnn" element={<CNNvsRNN />} />
          <Route path="/learning-journey" element={<StudyJourney />} />
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
