import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
        const [jobs,setjobs]=useState([]);
        useEffect(()=>{
            fetch('jobs.json')
            .then(res=>res.json())
            .then(data=>setjobs(data))
        },[])
    return (
        <div>
        <div>
            <h2 className="text-center text-5xl">Featured Jobs:{jobs.length}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
            {
                jobs.map(job =><Job key={job.id} job={job}></Job>)
            }
        </div>
        </div>
    );
};

export default FeaturedJobs;