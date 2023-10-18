import TestHeader from "../../components/TestHeader/TestHeader";
import AddTodo from "../../components/Todo/AddTodo";
import Todos from "../../components/Todo/Todos";

const TodoPage = () => {
	return (
		<>
			<TestHeader />
			<AddTodo />
			<Todos />
		</>
	);
};

export default TodoPage;
