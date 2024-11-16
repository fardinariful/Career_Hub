import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
        const [jobs,setjobs]=useState([]);
        const [joblength,setjonlength]=useState(4);
        useEffect(()=>{
            fetch('jobs.json')
            .then(res=>res.json())
            .then(data=>setjobs(data))
        },[])
    return (
        <div>
        <div className="space-y-3">
            <h2 className="text-center text-5xl">Featured Jobs</h2>
            <p className="text-[#757575] font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
            {
                jobs.slice(0,joblength).map(job =><Job key={job.id} job={job}></Job>)
            }
        </div>
        <div className={joblength===jobs.length ? 'hidden' : ' ' }>
           
            <button className="btn btn-primary text-white w-48 mt-4" onClick={()=>setjonlength(jobs.length)}>Show all</button>
                    
            </div>
        </div>
    );
};

export default FeaturedJobs;