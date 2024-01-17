import React from "react";
import { Link, useParams } from 'react-router-dom';
import './DogDetails.css';

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.find(d => d.name === name);
    
    if (!dog) {
        return <p className="dog-not-found">Dog not found</p>;
    }

    return (
        <div className="dog-details-container">
            <h2 className="dog-details-header">{dog.name}</h2>
            <img src={dog.src} alt={dog.name} className="dog-details-image" />
            <p>{dog.age} years old</p>
            <ul className="dog-details-facts">
                {dog.facts.map((fact, index) => (
                    <li key={index} className="dog-details-fact">{fact}</li>
                ))}
            </ul>
            <Link to="/dogs" className="dog-details-back-link">Back to Home</Link>
        </div>
    );
};

export default DogDetails;
