import { MdDelete,MdModeEdit } from "react-icons/md";


function Todo({task,handleDelete,handleEdit}) {
  return (
 <ul>
  {
    task.map((task)=>{
    return(
      <li className="m-4 p-4 flex w-40" key={task.id}>
        {task.task}
         <MdDelete onClick={()=>handleDelete(task.id)} />
         <MdModeEdit onClick={()=>handleEdit(task.id)} />
      </li>
    )
    })
  }
 </ul>
  )
}

export default Todo
