import React, { useState } from "react";

const TodoEdit = () => {
  const [todo, setTodo] = useState("");
  const [items, setitem] = useState([]);
  const [edit, setEdit] = useState(0);

  let handleChange = (e) => {
    setTodo(e.target.value);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      const editTodo = items.find((t) => t.id === edit);
      const updatetodo = items.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setitem(updatetodo);
      setEdit(0);
      return;
    }
    setitem([...items, { id: `${todo}-${Date.now()}`, todo }]);
    console.log(Date.now());
    setTodo("");
  };
  const handleDelete = (id) => {
    // const deltodo = items.filter((t) => t.id !== id)
    // setitem(deltodo)
    console.log(id);
    setitem((del) => {
      console.log(del);
      return del.filter((elem, index) => elem.id !== id);
    });
  };
  const handleEdit = (id) => {
    const editTodo = items.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEdit(id);
  };

  return (
    <>
      <div className="todohead">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter the todo"
            onChange={handleChange}
            value={todo}
          />
          <button>add Row</button>
        </form>
      </div>
      <div className="d-flex flex-column align-items-center">
        {items.map((t, i) => {
          return (
            <span className="todobody">
              <p key={i}>
                {i+1}. {t.todo}
              </p>
              <button className="d" onClick={() => handleDelete(t.id)}>
                Delete
              </button>
              <button className="e" onClick={() => handleEdit(t.id)}>
                Edit
              </button>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default TodoEdit;