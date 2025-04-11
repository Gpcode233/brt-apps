// NjemApp.jsx
import React, { useState } from "react";
import "./NjemApp.css";
import backgroundImage from "../images/image_fx (2) 1.png";

export default function NjemApp() {
  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departureMenuOpen, setDepartureMenuOpen] = useState(false);
  const [tab, setTab] = useState("option1");

  const locations = ["Holyghost", "Abakpa", "Emene", "Obiagu", "Okpara Square"];

  return (
    <div className="njem-container">
      <header className="njem-header">
        <div className="njem-logo">Njem</div>
        <nav className="njem-nav">
          <a href="#" className="nav-link active">Home</a>
          <a href="#" className="nav-link">Verify Booking</a>
          <a href="#" className="nav-link">Login/Register</a>
        </nav>
      </header>

      <main className="njem-main" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="hero-section">
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
          
          <div className="tab-container">
            <button 
              className={`tab-button ${tab === "option1" ? "active" : ""}`}
              onClick={() => setTab("option1")}
            >
              Option 1
            </button>
            <button 
              className={`tab-button ${tab === "option2" ? "active" : ""}`}
              onClick={() => setTab("option2")}
            >
              Option 2
            </button>
          </div>
          
          <div className="form-container">
            {/* Departure Location */}
            <div className="form-group">
              <button 
                className="dropdown-button"
                onClick={() => setDepartureMenuOpen(!departureMenuOpen)}
              >
                {selectedDeparture || "Departure Location"}
                <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {departureMenuOpen && (
                <div className="dropdown-menu">
                  {locations.map((location) => (
                    <div 
                      key={location} 
                      className="dropdown-item"
                      onClick={() => {
                        setSelectedDeparture(location);
                        setDepartureMenuOpen(false);
                      }}
                    >
                      {location}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Arrival Location */}
            <div className="form-group">
              <button className="dropdown-button">
                Arrival Location
                <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Departure Date - Calendar Input */}
            <div className="form-group">
              <input
                type="date"
                className="form-input"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
                placeholder="Departure Date"
              />
            </div>

            {/* Number of Travelers */}
            <div className="form-group">
              <button className="dropdown-button">
                No of travellers
                <svg xmlns="http://www.w3.org/2000/svg" className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Submit Button */}
            <button className="submit-button">
              Search Buses
            </button>
          </div>
        </div>
      </main>

      <footer className="njem-footer">
        <div className="footer-logo">Njem</div>
        <p className="footer-text">
          The heart of Enugu's movement<br />
          Njem, 2025. All rights reserved.
        </p>
      </footer>
    </div>
  );
}