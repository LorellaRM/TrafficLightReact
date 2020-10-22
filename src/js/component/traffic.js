import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap";

export const Signal = () => {
	let [color, setColor] = useState(false);

	return color ? (
		<Button className="border-danger" onClick={() => setColor(false)} /> //hay que ponerle una duracion
	) : (
		<Button className="border-success" onClick={() => setColor(true)} />
	);
};
