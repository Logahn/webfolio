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
          <Route exact path="/webfolio" component={<HomePage />} />
          <Route path="/webfolio/portfolio" element={<Portfolio />} />
          <Route path="/webfolio/publications" element={<Publications />} />
          <Route path="/webfolio/certifications" element={<Certifications />} />
          <Route path="/webfolio/resume" element={<Resume />} />
          <Route path="/webfolio/blog" element={<Blog />} />
          <Route
            path="/webfolio/transfer-learning"
            element={<TransferLearning />}
          />
          <Route
            path="/webfolio/k-nearest-neighbors"
            element={<KNearestNeighbors />}
          />
          <Route
            path="/webfolio/support-vector-machines"
            element={<SupportVectorMachines />}
          />
          <Route path="/webfolio/kernel-trick" element={<KernelTrick />} />
          <Route path="/webfolio/cnn-vs-rnn" element={<CNNvsRNN />} />
          <Route path="/webfolio/learning-journey" element={<StudyJourney />} />
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
