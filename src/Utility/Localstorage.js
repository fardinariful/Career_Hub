const getstorejobapplication=()=>{
    const storedjobapplication=localStorage.getItem('job-application');
    if(storedjobapplication){
        return JSON.parse(storedjobapplication);
    }
    else{
      return [];
    }
}

const savejobapplication=id=>{
    const storedjobapplication=getstorejobapplication();
    const exists=storedjobapplication.find(jobid=>jobid===id);
    if(!exists){
        storedjobapplication.push(id);
        localStorage.setItem('job-application',JSON.stringify(storedjobapplication));
    }
}

export{getstorejobapplication,savejobapplication}