import React, { useState } from "react";
import "./NjemApp.css";
import backgroundImage from "../images/image_fx (2) 1.png";

export default function NjemApp() {
  const [activeTab, setActiveTab] = useState("option1");
  const [departureDate, setDepartureDate] = useState("");

  const locations = ["Holyghost", "Abakpa", "Emene", "Obiagu", "Okpara Square"];

  return (
    <div className="njem-container">
      {/* Header */}
      <header className="njem-header">
        <div className="njem-logo">Njem</div>
        <nav className="njem-nav">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Verify Booking</a>
          <a href="#" className="nav-link">Login/Register</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="njem-main">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Ka Anyi Gaa , Ndi Enugu<br />
              Let's Move, Together.
            </h1>
            <p className="hero-subtitle">
              Njem is the heart of Enugu's movement. Your homegrown app for smarter, safer travel.
            </p>
          </div>

          <div className="booking-card">
            <h2 className="booking-title">Book your trip</h2>
            
            {/* Tabs */}
            <div className="tab-group">
              <button 
                className={`tab-button ${activeTab === "option1" ? "active" : ""}`}
                onClick={() => setActiveTab("option1")}
              >
                Option 1
              </button>
              <button 
                className={`tab-button ${activeTab === "option2" ? "active" : ""}`}
                onClick={() => setActiveTab("option2")}
              >
                Option 2
              </button>
            </div>

            {/* Form */}
            <div className="form-container">
              <div className="form-group">
                <select className="form-input">
                  <option>Departure Location</option>
                  {locations.map(location => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <select className="form-input">
                  <option>Arrival Location</option>
                  {locations.map(location => (
                    <option key={location}>{location}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <input
                  type="date"
                  className="form-input"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </div>

              <div className="form-group">
                <select className="form-input">
                  <option>No of travellers</option>
                  {[1, 2, 3, 4, 5].map(num => (
                    <option key={num}>{num}</option>
                  ))}
                </select>
              </div>

              <button className="cta-button">
                Search Buses
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="njem-footer">
        <div className="footer-content">
          <h3 className="footer-logo">Njem</h3>
          <p className="footer-text">
            The heart of Enugu's movement<br />
            © Njem 2025. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}