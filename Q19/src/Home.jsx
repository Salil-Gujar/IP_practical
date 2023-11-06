// Home.js 
import React from 'react'; 
import { Link } from 'react-router-dom';

function Home (){ 
	return (<>
	<h1>This is the home component !</h1>
	<button><Link to="/contact">Go to Contacts</Link></button><br/><br/>
	<button><Link to="/about">Go to about</Link></button>
	</>) 

} 

export default Home;
