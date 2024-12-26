import ProjectSelection from "./components/ProjectSelection";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>

<div className="flex flex-row h-screen w-screen">

  <div className="bg-black h-full w-1/4 rounded mt-10">
      <Sidebar />
  </div>

  <div className="flex-row justify-center items-center mx-auto mt-20 ">
    <ProjectSelection />
  </div>
</div>
    </>
  );
}

export default App;
