import { Link } from "react-router-dom";


const Home : React.FC =()=>{
    return (
        <>
          <div className="px-[6vw] xl:px-[14vw] py-[4vh] h-[70vh] ">
            <div className="flex flex-col gap-[3rem] justify-center items-center h-[100%] ">
                <h1 className="text-6xl">Find your <span className="text-blue-500">Dream </span>Job</h1>
                <Link to='/jobs'><button className="px-2 py-3 bg-blue-500 text-white">Find Now</button></Link>

            </div>
        </div>
        
        </>


    )
}
export default Home;