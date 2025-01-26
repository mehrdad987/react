import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css"; // Import the CSS file
import DeepSeekChat from "./DeepSeekChat";
import "./styles.css";
import Home from "./Home";

// Create 8 Page Components with unique background images

const Page1 = () => <div className="page page1"><DeepSeekChat /></div>;
const Page2 = () => <div className="page page2">Welcome to Page 2!</div>;
const Page3 = () => <div className="page page3">Welcome to Page 3!</div>;
const Page4 = () => <div className="page page4">Welcome to Page 4!</div>;
const Page5 = () => <div className="page page5">Welcome to Page 5!</div>;
const Page6 = () => <div className="page page6">Welcome to Page 6!</div>;
const Page7 = () => <div className="page page7">Welcome to Page 7!</div>;
const Page8 = () => <div className="page page8">Welcome to Page 8!</div>;

// App Component
const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

// Separate component to use hooks
const AppContent = () => {
  const location = useLocation(); // Get current route location

  return (
    <div className="app-container">
      {/* Conditionally render tabs if not on Page1 */}
      {location.pathname !== "/page1" && (
        <div className="tab-container">
          <Link to="/page1" className="tab" aria-label="Go to Page 1">
            <img src="/images/1.jpeg" alt="Tab 1" />
          </Link>
          <Link to="/page2" className="tab" aria-label="Go to Page 2">
            <img src="/images/2.jpg" alt="Tab 2" />
          </Link>
          <Link to="/page3" className="tab" aria-label="Go to Page 3">
            <img src="/images/3.jpg" alt="Tab 3" />
          </Link>
          <Link to="/page4" className="tab" aria-label="Go to Page 4">
            <img src="/images/4.jpg" alt="Tab 4" />
          </Link>
          <Link to="/page5" className="tab" aria-label="Go to Page 5">
            <img src="/images/5.jpg" alt="Tab 5" />
          </Link>
          <Link to="/page6" className="tab" aria-label="Go to Page 6">
            <img src="/images/6.png" alt="Tab 6" />
          </Link>
          <Link to="/page7" className="tab" aria-label="Go to Page 7">
            <img src="/images/capture.jpg" alt="Tab 7" />
          </Link>
          <Link to="/page8" className="tab" aria-label="Go to Page 8">
            <img src="/images/ira.png" alt="Tab 8" />
          </Link>
        </div>
      )}

      {/* Routes */}
      <Routes>
      <Route path="/Home" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
        <Route path="/page8" element={<Page8 />} />
        <Route path="/" element={<Navigate to="/Home" />} /> {/* Redirect to Page1 by default */}
      </Routes>
    </div>
  );
};

export default App;