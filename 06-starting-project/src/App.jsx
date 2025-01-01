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
      return <Project project={selectedProject} handleTask={handleTask} />
    }
  }

  function onProjectSelect(project) {
    const proj = projects.filter((pr) => pr.name == project.name);
    setSelectedProject(proj[0]);
    setSection((prev) => "pr");
  }

  function updateProject(project) {
    setProjects((prev) =>
      [...prev,
        project]
    )
  }

  function handleTask(op, task, prName) {
    if (op === "add") {
      var proj = projects.map((project) =>
        project.name == prName
          ?
          {
            ...project,
            tasks: [...project.tasks, task]
          } :
          project);
      setProjects((prev) => proj);
      var selected = proj.filter(x => x.name == prName)[0];
      setSelectedProject((prev) => selected);
    }
    else {
        var proj =projects.map((project) =>
          project.name == prName
            ?
            { ...project, tasks: project.tasks.filter((tsk) => tsk != task) }
            :
            project);
      setProjects((prevProjects) => proj);
      console.log(proj);
        var selected = proj.filter(x => x.name == prName)[0];
        setSelectedProject((prev) => selected);
    }
  }

  function handleSection(section) {
    setSection((prev) => section);
  }

  const [section, setSection] = useState("in");
  const [selectedProject, setSelectedProject] = useState({ name: '', desc: '', date: '' });
  const [projects, setProjects] = useState([{
    name: 'Ben',
    desc: 'bjlaskfjdslkfjsd',
    date: new Date(2021, 10, 11),
    tasks: ["one", "two"]
  },
  {
    name: "Mic",
    desc: "fjsdklfj  jfsdljfsdlk  fjsdlkfjsdl",
    date: new Date(2021, 10, 11),
    tasks: ["Task1", "Task2"]
  }]);


  return (
    <>
      <div className="flex flex-row h-screen w-screen">

        <div className="bg-black h-full w-1/4 rounded mt-10">
          <Sidebar projects={projects} onProjectSelect={onProjectSelect} handleSection={handleSection} />
        </div>

        <div className="flex-row justify-center items-center h-full w-3/4 px-10 mt-20 ">
          {Display(section, handleSection)}
        </div>
      </div>
    </>
  );
}

export default App;
