"use client"
import {useState} from "react";

interface Todo {
    id:number;
    text:string;
    completed:boolean;
}
const TodoList=()=>{

    const [todos,setTodos]= useState<Todo[]>([]);
    const [inputValue,setInputValue]=useState("");
    
    const addTodo=()=>{
        if(inputValue.trim()==="")
            return;
        setTodos([
            ...todos,
            {id:Date.now(), text:inputValue, completed: false}
        ])
        setInputValue("");
    }
    const toggleTodo = (id:number) =>{
        setTodos(
            todos.map((todo)=>
            todo.id=== id? {...todo, completed:!todo.completed}:todo
            )
        )

    }
    const deleteTodo = (id:number) =>{
        setTodos(
            todos.filter((todo)=>
                todo.id!== id ))
        }
        return(
            <div className="flex flex-col min-h-screen">
                <header className="bg-blue-700 text-white py-4">
                    <div className="text-center mx-auto max-w-4xl">
                        <h1 className="text-3xl font-serif font-bold">TODO APP</h1>
                        <p className="font-serif mt-3">Organize your task by todo app!</p>
                    </div>
                 </header>
                <main className="flex-grow justify-center items-center flex">
                    <div className="max-w-md py-4 mx-auto bg-slate-300 rounded-lg shadow-md">
                        <div className="mb-4">
                            <div className="flex ">
                                <input type="text"
                                value={inputValue}
                                onChange={(e)=> setInputValue(e.target.value)}
                                placeholder="add new task"
                                className="p-2 flex-grow border border-gray-400 rounded-lg"
                                />
                                <button 
                                onClick={addTodo}
                                className="px-4 py-2 rounded-lg ml-2 text-white bg-blue-500 hover:bg-sky-400">
                                   ADD 
                                </button>
                            </div>
                        </div>
                        <ul className="space-y-2">
                            {todos.map((todo)=>(
                                <li key={todo.id}
                                className={`flex items-center justify-between p-2 border border-slate-400 rounded-lg ${todo.completed? "bg-lime-400 line-through":"bg-sky-200"}`}>
                                    <span>{todo.text}</span>
                                    <div>
                                    <button
                                    onClick={()=> toggleTodo(todo.id)}
                                    className="px-2 py-1 bg-amber-200 rounded-lg hover:bg-gray-300 text-white"
                                    >
                                    {todo.completed? "Undo": "Complete"}
                                    </button>

                                    <button
                                    onClick={()=> deleteTodo(todo.id)}
                                    className="px-2 py-1 bg-red-600 rounded-lg hover:bg-red-200 text-white"
                                    >
                                     Delete
                                    </button>
                                    </div>

                                </li>
                            ))}

                        </ul>
                    </div>
                </main>
            </div>
        );
                            

}
                            

export default TodoList
