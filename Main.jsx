import "./Todo.css"
import { useState } from "react";
import Form from "./Form.jsx";
import Todo from "./Todo.jsx";

function Main(){
    const[input,setInput]=useState("");
    const[task,setTask]=useState([]);
    const[IdToEdit,setEdit]=useState(null);
    const[isEditing,setEditing]=useState(false);


    function handleSubmit(e){
     e.preventDefault();
     if(isEditing){
      setTask(
        task.map((existing)=>
        existing.id==IdToEdit?{...existing,task:input}:existing
        )
      );
      isEditing(false);
      setEdit(null);

     }
     else{
       const obj={task:input,id:Date.now()}
       setTask([...task,obj]); 

     }
    

    setInput("");
    }

    function handleDelete(id) {
  setTask(task.filter((task) => task.id !== id));
}

function handleEdit(id){
const taskEdit= task.find((task)=>id==task.id);
setInput(taskEdit.task);
setEdit(taskEdit.id);
setEditing(true);

}

    return(
      <>
      <Form input={input} setInput={setInput} handleSubmit={handleSubmit}
                          isEditing={isEditing} IdToEdit={IdToEdit} />

      <Todo task={task} handleDelete={handleDelete} handleEdit={handleEdit}/>
     </>
     );
}
export default Main;