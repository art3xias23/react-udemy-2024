import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function NewProject(){
    const [startDate, setStartDate] = useState();
    return(
        <>
        <div className="flex flex-col  bg-red-200 h-screen w-screen p-40">
            <div className=" text-lg flex flex-row items-end justify-end gap-5">
                <button >Cancel</button>
                <button className="btn bg-sky-500 px-5">Save</button>
            </div>
            <div className="flex flex-col gap-5">
                <input className="w-full"/>
                <textarea></textarea>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
        </div>
        </>
    )
}