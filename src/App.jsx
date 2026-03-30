import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
   const [title, settitle] = useState('')
   const [description, setdescription] = useState('')
    const [task, setTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault();
   const copyTask=[...task]
   copyTask.push({title,description})
   setTask(copyTask)
  
    settitle('')
    setdescription('')
  };
  const DeleteNote=(idx)=>{
    const copyTask=[...task]
    copyTask.splice(idx,1)
    setTask(copyTask)
  }
  return (
    <div className="h-screen  lg:flex  bg-black text-white ">
      <form
        onSubmit={(e) => {
          submithandler(e);
        }}
        className="flex lg:w-1/2 flex-col item-start  p-10 "
        action=""
      >
        <input
          type="text"
          placeholder="Enter Notes heading"
          className="px-5 w-full py-2 border-2 rounded mb-5" value={title} onChange={(e)=>{
            settitle(e.target.value)
           
          }}
        />
        <input
          type="text"
          className="px-5 w-full h-20 py-2 border-2"
          placeholder="Write details" value={description}
          onChange={(e)=>{
           setdescription(e.target.value)
          }}
        />
        <button className="bg-white  active:scale-95 cursor-pointer text-black px-5 py-2 w-full rounded mt-10">
          Add Note
        </button>
      </form>
      <div className=" lg:w-1/2 gap-5 border-l-2 p-10 bg-gray-500  ">
        <h1 className="text-3xl  font-bold">Your Notes</h1>
        <div className="flex  h-full   flex-wrap overflow-auto gap-5 mt-5">
          
          {task.map(function(elem,idx){
            return <div  key={idx} className=" bg-[url('https://image.slidesdocs.com/responsive-images/docs/plain-blue-letter-paper-page-border-background-word-template_697cf9d619__1131_1600.jpg')] bg-cover py-7 px-3 wrap-break-word h-55 rounded-2xl w-45  flex flex-col justify-between  ">
              <div>
              <h3  className="text-black text-xl font-bold ml-2 mb-2">{elem.title}</h3>
      
              <p className="text-gray-600 ml-2 leading-tight text-sm">{elem.description}</p>
              </div>
              <button onClick={()=>{
                DeleteNote(idx)
              }} className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white">
             Delete
              </button>
            </div>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
