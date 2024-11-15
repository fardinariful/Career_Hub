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
                <div className="p-4 w-full text-left">
                    <h2 className="text-lg font-bold">{job_title}</h2>
                    <p className="text-xl text-gray-600">{company_name}</p>
                    <div className="flex justify-start items-center mt-2">
                        <button className="text-[#7E90FE] border border-[#9873FF] px-5 py-2 rounded-lg font-semibold mr-4">
                            Remote
                        </button>
                        <button className="text-[#7E90FE] border border-[#9873FF] px-5 py-2 rounded-lg font-semibold mr-4">
                            Full Time
                        </button>
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
