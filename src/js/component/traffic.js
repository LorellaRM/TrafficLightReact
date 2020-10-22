import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import "bootstrap";

export const Signal = () => {
	let [color, setColor] = useState(false);

	return color ? (
		<Button className="btn-circle" onClick={() => setColor(false)} /> //hay que ponerle una duracion
	) : (
		<Button className="btn-circle" onClick={() => setColor(true)} />
	);
};

Signal.propTypes = {
	colorlight: PropTypes.string
};
