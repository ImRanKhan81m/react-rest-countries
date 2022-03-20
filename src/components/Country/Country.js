
import React from 'react';
import '../Country/Country.css'

const Country = (props) => {
    const {area, region, population, name, flags} = props.country;
    return (
        <div className='country'>
            <h2>Country Name: {name.common} </h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <p>Region: {region}</p>
            <h4>Area: {area}</h4>
        </div>
    );
};

export default Country;  