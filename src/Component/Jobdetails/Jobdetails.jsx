import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { PiSubtitlesBold } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { savejobapplication } from "../../Utility/Localstorage";
const Jobdetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id == idInt);
    console.log(job);
    const applynow=()=>{
        savejobapplication(idInt);
        toast("Apply job successfully");
    }
    return (
        <div>
            <div>
            <h3 className="text-3xl font-bold">Job details</h3>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="md:col-span-3 text-left   space-y-4">

                    <h3 className="text-[#757575]"><span className="font-bold">Job Description:</span> {job.job_description}</h3>
                    <p className="text-[#757575]"><span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</p>
                    <p className="text-[#757575]"><span className="font-bold">Educational Requirements:</span> {job.educational_requirements}</p>
                    <p className="text-[#757575]"><span className="font-bold">Experiences:</span> {job.experiences}</p>
                </div>
                <div className=" bg-[#7E90FE1A] rounded-md">
                    <div className="m-4 ">
                    <p className="text-left">Job Details</p>
                    <hr />
                    <div>
                    <div className="flex items-center space-x-2 mt-4">
                        <CiDollar className="text-3xl mr-2 text-[#7E90FE]" />
                        <p>Salary: {job.salary}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <PiSubtitlesBold className="text-3xl text-[#7E90FE]" />
                        <p className="mt-6">Job Title: {job.job_title}</p>
                    </div>
                    </div>
                    <p className="text-left mt-3 mb-3">Contact Information</p>
                    <hr className="mb-3" />
                    <div className="space-y-3">
                    <div className="flex items-center space-x-5">
                   <FiPhone  className="text-xl text-[#7E90FE]"></FiPhone>
                   <p>Phone:{job.contact_information.phone}</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <MdOutlineEmail className="text-xl text-[#7E90FE]"></MdOutlineEmail>
                        <p>Email:{job.contact_information.email}</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <CiLocationOn className="text-4xl text-[#7E90FE]"></CiLocationOn>
                        <p>Address:{job.contact_information.address}</p>
                    </div>
                    </div>
                    
                    </div>

                    <div>
                <button onClick={applynow} className="btn btn-primary w-full">Apply Now</button>
                <ToastContainer />
            </div>
                </div>
                
            </div>
            
            </div>
            
        </div>
    );
};

export default Jobdetails;