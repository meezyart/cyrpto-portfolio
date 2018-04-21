import React from 'react'
import TrackerPage from '../TrackerPage';

const Header = () => (
  <section className="hero is-info">
    <div className="hero-body is-size-3 has-text-centered">
      Cryptocurrency TRACKER!
    </div>
  </section>
);


const Layout = ({ children }) => (
    <div>
    <Header/> 
        <section className="section">
            <div className="container">
            <TrackerPage />
            </div>
        </section>
  </div>
); 

export default Layout;