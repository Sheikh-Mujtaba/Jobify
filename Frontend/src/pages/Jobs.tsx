import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Category {
    id :number ,
    name : string
    
}

interface Vacancy {
    id: number,
    title :string,
    description :string,
    salary : string,
    category_name: string;
}


const Jobs: React.FC = () => {
    const [vacancies,setVacancies]=useState<Vacancy[]>([]);
    const [categories,setCategories]=useState<Category[]>([]);
    const [selectedCategory,setSelectedCategory]=useState<string>('');


    useEffect(()=>{
        axios 
        .get('http://localhost:8081/categories')
        .then ((response)=> setCategories(response.data))
        .catch((err)=>console.error('Error',err))
    },[])

    useEffect(()=>{
        axios 
        .get('http://localhost:8081/vacancies')
        .then ((response)=> setVacancies(response.data))
        .catch((err)=>console.error('Error',err))
    },[])

    const filteredVacancies = vacancies.filter(vacancy =>
        selectedCategory ? vacancy.category_name === selectedCategory : true
    );



 
    
    return (
        <div className="px-[6vw] xl:px-[14vw] py-[4vh]">
            <div className=" py-[1rem]">
            <label htmlFor="category-select">Select Category:</label>
                <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.name} >
                            {category.name} 
                            
                        </option>
                    ))}
                </select>
             
            </div>


             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[2rem] h-[100%] cursor-pointer">
                {filteredVacancies.map((vacancy)=>(
                   

                   
                         <Link to={`/jobDetails/${vacancy.id}`} key={vacancy.id} className="border px-[2rem] py-[3rem] flex flex-col justify-around items-center gap-[3rem] bg-blue-500 text-white">
                        <h2 className="text-2xl">{vacancy.title}</h2>
                        <h2 className="text-xl">{vacancy.description}</h2>
                        <h2 className="text-xl"> ${vacancy.salary}</h2>
                        </Link>
                   
                 

                ))}

           
                

              
            </div>
           
        </div>
    );
};

export default Jobs;
