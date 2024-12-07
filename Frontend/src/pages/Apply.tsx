import axios from "axios";
import { error } from "console";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Application {
    id :number,
    title : string ,
    
}


const Apply : React.FC =()=>{
    const [applicationDetails,setApplicationDetails]=useState<Application | null>(null);
    const { id } = useParams<{ id: string }>();

    useEffect (()=>{
        axios.get (`http://localhost:8081/apply/${id}`)
        .then ((resposnse) => setApplicationDetails (resposnse.data))
        .catch ((error) => console.error ('Error',error))
    },[id])

    const handleSubmit=(e : React.FormEvent)=>{
        e.preventDefault();
    }

    return (
        <>
           <div className="px-[6vw] xl:px-[14vw] py-[4vh] h-[70vh]">
            <div className="h-[100%] flex justify-center items-center">
                <div className="w-[40%] h-auto px-[3rem] py-[1rem] bg-blue-500 text-white flex flex-col gap-[2rem]">
                    <h1 className="text-3xl">Application</h1>

                    <form className="flex  flex-col justify-around gap-[3rem] text-black" onSubmit={handleSubmit} >

                        <input type="text" name="job" className="border px-2 py-1" value={applicationDetails?.title || ""} disabled/>

                        <input type="text" name="name" className="border px-2 py-1" placeholder="Name"/>


                        <input type="email" name="email" className="border px-2 py-1" placeholder="Email"/>

                        <input type="text" name="number" className="border px-2 py-1" placeholder="Phone Number"/>


                        <input type="file" name="resume" className="border px-2 py-1" placeholder="Resume"/>
                        <button className="px-2 py-3  bg-white" type="submit">Apply </button>

                    </form>

                </div>


            </div>
        </div>
        </>
    )
}
export default Apply;