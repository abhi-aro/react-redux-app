import React from "react";
import { useParams } from "react-router-dom";
import TestHeader from "../../components/TestHeader/TestHeader";

const Testing = () => {
	const { id } = useParams();
	return (
		<div>
			<TestHeader />
			Testing {id}
		</div>
	);
};

export default Testing;
