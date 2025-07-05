import React, { useEffect, useState } from 'react';

const TodoList = () => {
  const [input, setInput] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(null);

  // Load from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("todo"));
    if (savedTasks) {
      setTaskList(savedTasks);
    }
  }, []);

  // Save to localStorage when taskList changes
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(taskList));
  }, [taskList]);

  // Add or Save Task
  const addOrSaveTask = () => {
    const trimmedInput = input.trim();
    if (trimmedInput === '') return;

    // Check for duplicates (ignore current edit)
    const isDuplicate = taskList.some(
      (task) => task.task === trimmedInput && task.id !== editId
    );
    if (isDuplicate) {
      alert("Task already exists");
      return;
    }

    if (editId !== null) {
      // Save edited task
      const updatedList = taskList.map((task) =>
        task.id === editId ? { ...task, task: trimmedInput } : task
      );
      setTaskList(updatedList);
      setEditId(null);
      setInput('');
    } else {
      // Add new task
      const newTask = {
        id: taskList.length > 0 ? taskList[taskList.length - 1].id + 1 : 0,
        task: trimmedInput
      };
      setTaskList([...taskList, newTask]);
      setInput('');
    }
  };

  // Delete a task
  const deleteTheTask = (id) => {
    const filtered = taskList.filter((task) => task.id !== id);
    setTaskList(filtered);
  };

  // Start editing a task
  const startEditing = (task) => {
    setEditId(task.id);
    setInput(task.task);
  };

  return (
    <div className="w-full bg-blue-50 min-h-screen p-4">
      <div className="w-1/2 mx-auto text-center">
        <h1 className="text-3xl mb-4">Todo</h1>
        <input
          type="text"
          placeholder="Enter Todo"
          className="border border-gray-400 px-3 py-1 text-base rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="ml-2 px-4 py-1 text-white bg-blue-600 rounded"
          onClick={addOrSaveTask}
        >
          {editId !== null ? 'Save' : 'Add'}
        </button>

        <ul className="mt-6 text-left text-lg">
          {taskList.map((task) => (
            <li key={task.id} className="flex justify-between items-center border-b py-2">
              <span>{task.task}</span>
              <div className="space-x-2">
                <button
                  onClick={() => startEditing(task)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTheTask(task.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
