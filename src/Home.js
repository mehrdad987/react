import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Home Page!</h1>
      <p>Click the button below to explore the World.</p>
      <Link to="/page1" className="home-button">
        Go to Tabs
      </Link>
    </div>
  );
};

export default Home;