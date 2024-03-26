import { observer } from "mobx-react-lite";
import { useState } from "react";
import store from "./store";

function Todos() {
  const { todoList, addTodo } = store;
  const [text, setText] = useState<string>("");

  const handleAddTodo = () => {
    // do addTodo here
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-4 text-white">Todos</h1>

      <div className="mb-2 flex items-center justify-center gap-2">
        <input
          type="text"
          value={text}
          placeholder="Enter Todo"
          className="rounded p-2 text-black"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button
          className="rounded bg-blue-500 p-2 text-white"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {todoList.map((data) => (
          <div>{data.text}</div>
        ))}
      </div>
    </div>
  );
}

const TodosComponent = observer(Todos);

export default TodosComponent;
