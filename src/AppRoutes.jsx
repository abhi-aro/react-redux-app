import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoPage from "./pages/Todo/TodoPage";
import Testing from "./pages/Testing/Testing";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<TodoPage />} />
			<Route path="/test">
				<Route index element={<>testing</>} />
				<Route path=":id" element={<Testing />} />
				<Route path="new" element={<>testing new</>} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
