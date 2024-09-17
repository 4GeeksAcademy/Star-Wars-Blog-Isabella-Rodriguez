import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store } = useContext(Context);

  return (
    <>
      <div className="container">
        <h1 className="text-danger">Characters</h1>
        <div className="card-container">
          {store.people.map((characters, index) => (
            <div key={index} className="card">
              <img src="http://via.placeholder.com/400x200" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{characters.name}</h5>
                <p className="card-text">Gender: {characters.gender}</p>
                <p className="card-text">Hair-color: {characters.hair_color}</p>
                <p className="card-text">Eye-color: {characters.eye_color}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h1 className="text-danger">Planets</h1>
        <div className="card-container">
          {store.people.map((planets, index) => (
            <div key={index} className="card">
              <img src="http://via.placeholder.com/400x200" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{planets.name}</h5>
                <p className="card-text">Gender: {planets.population}</p>
                <p className="card-text">Hair-color: {characters.hair_color}</p>
                <p className="card-text">Eye-color: {characters.eye_color}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS styles */}
      <style jsx>{`
        .container {
          padding: 20px;
        }

        .card-container {
          display: flex;
          overflow-x: auto;
          padding: 10px;
          white-space: nowrap; /* Prevent wrapping */
        }

        .card {
          display: inline-block; /* Align cards horizontally */
          width: 18rem; /* Fixed width for cards */
          margin-right: 15px; /* Space between cards */
          flex-shrink: 0; /* Prevent cards from shrinking */
        }

        .card-img-top {
          width: 100%; /* Ensure image fits the card width */
          height: auto;
        }

        /* Scrollbar styles */
        .card-container::-webkit-scrollbar {
          height: 8px; /* Height of the scrollbar */
        }

        .card-container::-webkit-scrollbar-thumb {
          background-color: rgba(0, 0, 0, 0.3); /* Scrollbar thumb color */
          border-radius: 4px; /* Rounded corners for scrollbar thumb */
        }

        .card-container::-webkit-scrollbar-track {
          background: #f1f1f1; /* Background color of the scrollbar track */
        }
      `}</style>
    </>
  );
}

