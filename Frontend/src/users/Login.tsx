import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Login : React.FC =()=>{

    const [email,setEmail] =useState<string>('');
    const [password,setPassword]=useState<string>('');

    const values ={email,password};

    const navigate = useNavigate();

    const handelSubmit=(e:React.FormEvent)=>{
        e.preventDefault();

        axios.post('http://localhost:8081/auth/login' ,values , {withCredentials : true} )
        .then (res => {
            if(res.status === 200) 
                return navigate('/home')
        })
        .catch (err => console.log('error'))
    }


    return (
        <>
         <div className="px-[6vw] xl:px-[14vw] py-[4vh] h-[70vh]">
  <div className="h-[100%] flex justify-center items-center">
    <div className="w-[100%] md:w-[50%] h-[90%] bg-blue-600 py-6 px-6 flex flex-col justify-center items-center rounded-xl">
      <h1 className="text-white text-4xl font-semibold mb-6">Login</h1>
      <form className="w-full max-w-sm space-y-4" onSubmit={handelSubmit}>
        
        {/* Email input */}
        <div>
          <label htmlFor="email" className="text-white text-lg">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-2 py-2 px-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            required
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        
        {/* Password input */}
        <div>
          <label htmlFor="password" className="text-white text-lg">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full mt-2 py-2 px-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your password"
            required
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full py-2 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

        </>

    )
}
export default Login;