import Initial from "./components/Initial";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import {useState} from 'react';

function Display(section, handleSection){
  if(section == "in"){
    return <Initial handle={handleSection} />
  }
  else if(section == "np"){
    return <NewProject />
  }
  else{
    return <Project />
  }
}

function App() {
  const [section, setSection] = useState("in");

  function handleSection(section){
    setSection((prev) => section);
  }

  return (
    <>

<div className="flex flex-row h-screen w-screen">

  <div className="bg-black h-full w-1/4 rounded mt-10">
      <Sidebar />
  </div>

  <div className="flex-row justify-center items-center mx-auto mt-20 ">
    {Display(section, handleSection)}
  </div>
</div>
    </>
  );
}

export default App;
