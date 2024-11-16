import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { getstorejobapplication } from "../../Utility/Localstorage";
import Appliedjob from "../Appliedjob/Appliedjob";
const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [displayjob,setdisplayjob]=useState([]);
    const [jobapplied, setjobapplied] = useState([]);

    const handleclick=filter=>{
        if(filter==='all'){
            setdisplayjob(jobapplied);
        }
        else if(filter==='remote'){
            const remotejob=jobapplied.filter(job=>job.remote_or_onsite==='Remote');
            setdisplayjob(remotejob);
        }
        else if(filter==='onsite'){
            const onsitejob=jobapplied.filter(job=>job.remote_or_onsite==='Onsite');
            setdisplayjob(onsitejob);
        }
    }
    useEffect(() => {
        const storedjobids = getstorejobapplication();
        if (jobs.length > 0) {
            const jobapplied = jobs.filter(job => storedjobids.includes(job.id))
            //console.log(jobapplied);
            setjobapplied(jobapplied);
            setdisplayjob(jobapplied);
        }

    }, [jobs])

    
    return (
        <div>
            <h2>Jobs i applied:{jobapplied.length}</h2>
            <div className="flex justify-end">
            <details className="dropdown">
                <summary className="btn m-1">Filter</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={()=>handleclick('all')}><a>All</a></li>
                    <li  onClick={()=>handleclick('remote')}><a>Remote</a></li>
                    <li  onClick={()=>handleclick('onsite')}><a>onsite</a></li>
                </ul>
            </details>
            </div>
            
            {
                displayjob.map(job => <Appliedjob key={job.id} job={job}></Appliedjob>)
            }
        </div>
    );
};

export default AppliedJobs;