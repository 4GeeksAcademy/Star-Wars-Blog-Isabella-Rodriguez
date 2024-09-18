import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container">
			{/* Aquí puedes poner un título o logo */}
			<Link to="/">
				<img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png" style={{ width: "76px", height: "38px" }}
								/>
			</Link>
			
		
				{/* Botón alineado a la derecha */}
			
					<button className="btn btn-success mt-3 mb-3 float-end">Check the Context in action</button>
				
			</div>
		</nav>
	);
};