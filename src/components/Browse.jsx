import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQurey } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

// const randomJobs = [1, 2, 3];

function Browse() {

  useGetAllJobs();

  const allJobs = useSelector(store=>store.job.allJobs);
  // console.log(allJobs);
  const dispatch = useDispatch();

  useEffect(()=>{
    return ()=>{
      dispatch(setSearchQurey(""));
    }
  },[])
  

  return (
    
      <div>
        <Navbar />
      <div  className="max-w-5xl mx-auto my-10">
        <h1 className="font-bold text-lg my-10">Search Result ({allJobs.length})</h1>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {allJobs.map((job) => {
            return <Job job={job} key={job._id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Browse;
