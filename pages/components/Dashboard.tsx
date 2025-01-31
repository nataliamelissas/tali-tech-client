import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/data-schema";

const client = generateClient<Schema>();

const createTodo = async () => {
  await client.models.Todo.create({
    content: window.prompt("Todo content?"),
    isDone: false,
  });
}

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={createTodo}>Create Todo</button>
    </div>
  );
}

export default Dashboard;