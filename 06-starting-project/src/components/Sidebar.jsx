export default function Sidebar({projects, onProjectSelect, handleSection}) {
    return (
        <div className="flex flex-col gap-10">
            <div className="ps-7">
                <h1 className="text-white font-bold mt-10">YOUR PROJECTS</h1>
                <p>
                    <button className="text-stone-500 bg-neutral-700 mt-10 p-1 rounded text-sm" onClick={() => handleSection("np")}>+ Add Project</button>
                </p>
            </div>
            <div>
                <ol>

                    {projects.map((project ,index) =>
                        <li onClick={()=> onProjectSelect(project)} className="text-white ps-7 py-2" key={index}>{project.name}</li>
                    )}
                </ol>
            </div>
        </div>
    )
}