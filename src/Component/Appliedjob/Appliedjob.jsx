const Appliedjob = ({job}) => {
    const{logo,job_title,company_name,remote_or_onsite,location,job_type,salary}=job;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
<h3>{job_title}</h3>
<h3>{company_name}</h3>
<h3>{remote_or_onsite}</h3>
<h3>{job_type}</h3>
        </div>
    );
};

export default Appliedjob;