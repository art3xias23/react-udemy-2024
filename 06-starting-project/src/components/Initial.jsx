import image from '../assets/no-projects.png'
export default function Initial({handle}){
    return(
        <>
        <img src={image} className="w-10 h-10 " />
        <h1>No Project selected</h1>
        <ul>
            <li>Select a project or get started with a new one</li>
        </ul>
        <button onClick={() => handle("np")} className="text-stone-500 bg-neutral-700 mt-10 p-1 rounded text-sm">Create new project</button>
        </>
    )
}