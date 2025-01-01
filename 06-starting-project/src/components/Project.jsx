import { useRef, useState } from 'react';
export default function Project({ project, handleTask }) {
    const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
    function updateTasks(op, task, prName) {
        handleTask(op, task, prName);
    }

    const taskRef = useRef();
    const currentTaskRef = useRef([]);
    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-bold text-3xl">{project.name}</h1>
            <div className="flex flex-row text-gray-400">
                {formatter.format(project.date)}
            </div>
            <div>
                {project.desc}
            </div>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
            <h1 className="font-bold text-3xl">Tasks</h1>
            <div className="flex flex-row gap-2">

                <input ref={taskRef} className="border border-black focus:bg-gray-300"></input>
                <button onClick={() => updateTasks("add", taskRef.current.value, project.name)}>Add Task</button>
            </div>
            <div className="flex flex-col gap-10">
                {project.tasks.map((task, index) =>
                    <div key={index} className="w-full flex flex-row bg-gray-200 justify-between pe-20 ps-5 py-2">
                        <div ref={(el)=> currentTaskRef.current[index]=el}>{task}</div>
                        {console.log(currentTaskRef.current?.innerText)}
                        <div><button onClick={() => updateTasks("clear", currentTaskRef.current[index]?.innerText, project.name)}>Clear</button> </div>
                    </div>
                )}
            </div>
        </div>
    )

}