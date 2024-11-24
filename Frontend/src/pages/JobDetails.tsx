import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

// Interface for the job details
interface Details {
    id: number;
    title: string;
    description: string;
    salary: string;
}

const JobDetails: React.FC = () => {
    const [jobDetails, setJobDetails] = useState<Details | null>(null);

    const { id } = useParams<{ id: string }>();
    console.log(id); // Check if id is correct

    useEffect(() => {
        if (!id) return;  // If no ID in the URL, exit early
      
        axios
          .get(`http://localhost:8081/vacancies/${id}`)
          .then((response) => {
            setJobDetails(response.data);
          })
          .catch((error) => {
            console.error('Error fetching job details:', error);
          });
      }, [id]);
      
      
    return (
        <div className="px-[6vw] xl:px-[14vw] py-[4vh] h-[70vh]">
            <div className="py-[1rem] flex justify-center items-center h-[100%]">
                {/* Render job details   if available */}
            {jobDetails ? (
                    <>
                        <div className="flex flex-col border gap-[3rem]  px-4 py-4 items-center w-[50%]">
                        <h2 className="text-2xl">{jobDetails.title}</h2>
                        <p className="text-xl">{jobDetails.description}</p>
                        <p>Salary: ${jobDetails.salary}</p>
                        <Link to={`/apply/${id}`}><button className="bg-blue-500 text-white px-4 py-3">Apply</button></Link>
                        <Link to='/jobs'  className="text-blue-500 underline">Back To Jobs</Link>

                        
                        </div>
                      
                    </>
                ) : (
                    <p>Loading job details...</p> // Display loading message if details are not yet available
                )}
            </div>
        </div>
    );
};

export default JobDetails;
