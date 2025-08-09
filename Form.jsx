

function Form({input,setInput,handleSubmit,isEditing}) {
  return (
   <>
   <form action="" onSubmit={handleSubmit}>
      <input className="m-4 p-4"
       type="text" 
      placeholder="Enter your task"
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <button type="submit" >{isEditing?"Edit":"Add Task"}</button>
   </form>
   </>
  )
}

export default Form