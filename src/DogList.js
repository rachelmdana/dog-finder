import React from "react";
import { Link } from 'react-router-dom';
import './DogList.css';

const DogList = ({ dogs }) => {
    return (
        <div className="dogs-container">
            {dogs.map(dog => (
                <div key={dog.name} className="dog-card">
                    <img src={dog.src} alt={dog.name} className="dog-image" />
                    <div className="dog-details">
                        <h3>
                            <Link to={`/dogs/${dog.name}`} className="dog-name-link">{dog.name}</Link>
                        </h3>
                        <p className="dog-age">{dog.age} years old</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DogList;
