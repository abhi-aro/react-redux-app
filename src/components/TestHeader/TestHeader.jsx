import React from "react";
import { Link } from "react-router-dom";

const TestHeader = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/test">Test</Link>
				</li>
				<li>
					<Link to="/test/1">Test 1</Link>
				</li>
				<li>
					<Link to="/test/2">Test 2</Link>
				</li>
				<li>
					<Link to="/test/new">Test new</Link>
				</li>
				<li>
					<>{process.env.NODE_ENV}</>
				</li>
				<li>
					<>Environment Variable</>
					<>{process.env.REACT_APP_TEST_VARIABLE}</>
				</li>
			</ul>
		</nav>
	);
};

export default TestHeader;
