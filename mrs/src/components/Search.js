import React, { useState } from 'react'
import './style.css'
import Songs from './Songs';

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('1001');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
        
    };
    
    const handleButtonClick =   (e) => { 
        console.log(`Searching for: ${searchTerm}`);
    }


    return (
        <>
        <div id="search">
	<svg viewBox="0 0 420 60" xmlns="http://www.w3.org/2000/svg">
		<rect class="bar"/>
		
		<g class="magnifier">
			<circle class="glass"/>
			<line class="handle" x1="32" y1="32" x2="44" y2="44"></line>
		</g>

		<g class="sparks">
			<circle class="spark"/>
			<circle class="spark"/>
			<circle class="spark"/>
		</g>

		<g class="burst pattern-one">
			<circle class="particle circle"/>
			<path class="particle triangle"/>
			<circle class="particle circle"/>
			<path class="particle plus"/>
			<rect class="particle rect"/>
			<path class="particle triangle"/>
		</g>
		<g class="burst pattern-two">
			<path class="particle plus"/>
			<circle class="particle circle"/>
			<path class="particle triangle"/>
			<rect class="particle rect"/>
			<circle class="particle circle"/>
			<path class="particle plus"/>
		</g>
		<g class="burst pattern-three">
			<circle class="particle circle"/>
			<rect class="particle rect"/>
			<path class="particle plus"/>
			<path class="particle triangle"/>
			<rect class="particle rect"/>
			<path class="particle plus"/>
		</g>
	</svg>
    <input
        type="text"
        placeholder="Enter search term"
        value={searchTerm}
        onChange={handleInputChange}
        name='q'
      />

{/* <button class="search-button" onClick={handleButtonClick}>
    <i class="fas fa-search"></i> Search
  </button> */}
</div>

<div id="results">
        <Songs id={searchTerm}/>
</div>
        </>
    )
}

export default Search
