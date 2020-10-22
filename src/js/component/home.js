import React from "react";
import { Signal } from "./traffic.js";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<card className="d-flex flex-column">
			<Signal colorlight="danger" />

			<Signal colorlight="warning" />

			<Signal colorlight="success" />
		</card>
	);
}
