import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollar } from "react-icons/ai";
const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl flex">
                <figure className="p-4">
                    <img
                        src={logo}
                        alt="Company Logo"
                        
                    />
                </figure>
                <div className="p-4 w-full text-left space-y-4">
                    <h2 className="text-2xl font-bold text-[#474747]">{job_title}</h2>
                    <p className="text-xl  text-[#757575]">{company_name}</p>
                    <div className="flex justify-start items-center mt-2">
                        <button className="text-[#7E90FE] border border-[#9873FF] px-5 py-2 rounded-lg font-semibold mr-4">
                            {remote_or_onsite}
                        </button>
                        <button className="text-[#8186a6] border border-[#9873FF] px-5 py-2 rounded-lg font-semibold mr-4">
                             {job_type}
                        </button>
                    </div>
                    <div className="flex flex-row  gap-5">
                        <h2 className="flex gap-2 font-semibold"><CiLocationOn className="text-2xl"></CiLocationOn>
                        {location}
                        </h2>
                        <h2 className="flex gap-2 font-semibold"><AiOutlineDollar className="text-2xl"></AiOutlineDollar>
                        Salary : {salary}
                        </h2>
                    </div>
                    <div className="mt-4">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default Job;
