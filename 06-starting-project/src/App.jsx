import Initial from "./components/Initial";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import Project from "./components/Project";
import { useState } from 'react';



function App() {
  function Display(section, handleSection) {
    if (section == "in") {
      return <Initial handle={handleSection} />
    }
    else if (section == "np") {
      return <NewProject updateProject={updateProject} />
    }
    else {
      return <Project project={project} handleTask={handleTask} />
    }
  }

  function onProjectSelect(project){
    const proj = projects.filter((pr) => pr.name == project.name);
    console.log('pr');
    console.log(proj[0]);
    setSection("project");
    setProject(proj[0]);
  }
  function updateProject(project) {
    setProjects((prev) => 
      [...prev,
        project]
    )
  }

  function handleTask(op, task, prName){
    if(op==="add"){
      var proj = projects.map((project) => 
      project.name == prName 
    ?
  {...project,
    tasks: [...project.tasks, task]
  } :
project);
setProjects((prev) => proj);
    }
    else{
      setProjects((prevProjects) => 
      prevProjects.map((project)=>
      project.name == prName 
    ?
  {...project, tasks:project.tasks.filter((tsk) => tsk != task)}
:
project))
    }
  }

  const [section, setSection] = useState("in");
  const [project, setProject] = useState({name:'', desc:'', date:''});
  const [projects, setProjects] = useState([{
    name: 'Ben',
    desc: 'bjlaskfjdslkfjsd',
    date: new Date(2021, 10, 11),
    tasks:["one", "two"]
  },
  {
    name: "Mic",
    desc: "fjsdklfj  jfsdljfsdlk  fjsdlkfjsdl",
    date: new Date(2021, 10, 11),
    tasks:["Task1", "Task2"]
  }]);

  function handleSection(section) {
    setSection((prev) => section);
  }

  return (
    <>

      <div className="flex flex-row h-screen w-screen">

        <div className="bg-black h-full w-1/4 rounded mt-10">
          <Sidebar projects={projects} onProjectSelect ={onProjectSelect} />
        </div>

        <div className="flex-row justify-center items-center h-full w-3/4 px-10 mt-20 ">
          {Display(section, handleSection)}
        </div>
      </div>
    </>
  );
}

export default App;
