import React from 'react'
import LatestJobCard from './LatestJobCard';
import { useSelector } from 'react-redux';

// const randomJob = [1,2,3,4,5,6,7,8];

function LatestJobs() {


    const {allJobs} = useSelector(store => store.job);

  return (
    <div className='max-w-5xl mx-auto my-20'>
        <h1 className='text-4xl font-bold'><span className='text-[#903b3b]'>Latest & Top</span> Job Openings</h1>
        <div className='grid grid-cols-3 gap-4 my-5'>
        {
            allJobs.length <= 0 ? <span>No Job Available</span> : allJobs?.slice(0,6).map((job)=><LatestJobCard  key={job._id} job={job}/>)
        }
        </div>
    </div>
  )
}

export default LatestJobs