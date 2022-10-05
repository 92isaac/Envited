import React from "react";
import "../assets/styles/Cardform.css";
import Birthday from "../assets/Birthday-cake.png";
import { FaRegCalendarCheck, FaGreaterThan } from "react-icons/fa";

const style = {
  background: "#fff",
  borderRadius: "5px",
  padding: "15px",
  fontSize: "2rem",
  fontWeight: "bold",
  marginTop: "10px",
};

const lessthan = { marginTop: "35px", fontWeight: "100", paddingRight: "10px" };

const CardForm = () => {
  return (
    <div>
      <div className="cardform">
        <div className="card">
          <img src={Birthday} alt="birthday card" />
        </div>
        <div className="birthday-details">
          <div>
            <div className="movie">
              <h2>Movie night</h2>
              <p>&#128075; hosted by Elysia</p>
            </div>
            <div className="res">
              <p>14 responses</p>
              <p className="see">.see guest</p>
              <p className="invite">&#129309; Invite</p>
            </div>
          </div>

          <div className="events">
            <div className="event">
              <div className="icon">
                <FaRegCalendarCheck style={style} />
              </div>
              <div className="event-text">
                <h4>18 August 6:00PM</h4>
                <p>to 19 August 1:00PM UTC +10</p>
              </div>
              <div className="icon">
                <FaGreaterThan style={lessthan} />
              </div>
            </div>
            <div className="event">
              <div className="icon">
                <FaRegCalendarCheck style={style} />
              </div>
              <div className="event-text">
                <h4>STREET NAME</h4>
                <p>301 Rowe Lane, WA, 7183</p>
              </div>
              <div className="icon">
                <FaGreaterThan style={lessthan} />
              </div>
            </div>
            <div className="event">
              <div className="icon">
                <FaRegCalendarCheck style={style} />
              </div>
              <div className="event-text">
                <h4>LINK</h4>
                <p>netflix.com</p>
              </div>
              <div className="icon">
                <FaGreaterThan style={lessthan} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
