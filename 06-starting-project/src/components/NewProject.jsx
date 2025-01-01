import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useRef } from "react";

export default function NewProject({updateProject}) {
    const [startDate, setStartDate] = useState();
    const nameRef=useRef();
    const descRef=useRef();
    const dateRef= useRef();

    function handleSave(){
        const name = nameRef.current.value;
        const desc = descRef.current.value;
        const date = startDate;
        updateProject({name:name, desc:desc, date:date, tasks:[]});
    }


    function handleStartDate(date){
        setStartDate(date);
    }
    return (
        <>
            <div className="flex flex-col">
                <div className=" text-lg flex flex-row items-center justify-end gap-5 py-10">
                    <button >Cancel</button>
                    <button className="btn bg-gray-900 text-white px-5 py-2 rounded" onClick={handleSave}>Save</button>
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex-flex-col">
                        <label htmlFor="title" className="font-semibold">TITLE</label>
                        <input ref={nameRef} name="title" className="bg-gray-300 w-full focus:border-slate-400 rounded text-lg hover:border-slate-300 shadow-sm focus:shadow" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="desc" className="font-semibold">DESCRIPTION</label>
                        <textarea ref={descRef} name="desc" rows="4" className="bg-gray-300 border-black rounded"></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="due" className="font-semibold">DUE DATE</label>
                        <DatePicker ref={dateRef} placeholderText="dd.mm.yy" className="bg-gray-300 w-full border-black rounded" name="due" selected={startDate} onChange={(date) => handleStartDate(date)} datehtmlFormat="Pp" />
                    </div>
                </div>
            </div>
        </>
    )
}