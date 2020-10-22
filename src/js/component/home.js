import React from "react";
import { Signal } from "./traffic.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Container } from "react-bootstrap";

//create your first component
export function Home() {
	return (
		<card className="d-flex flex-column bg-white p-3 rounded">
			<Signal id="danger" />

			<Signal id="warning" />

			<Signal id="success" />
		</card>
	);
}
