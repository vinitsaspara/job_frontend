import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FillterCard from "./FillterCard";
import Job from "./job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";


function Jobs() {

  const {allJobs} = useSelector(store=>store.job);
  const searchQurey = useSelector(store=>store.job.searchQurey);
  const [filterJobs,setFilterJobs] = useState(allJobs);
  // console.log(filterJobs);
  // console.log(searchQurey);
  

  useEffect(()=>{
      if(searchQurey){
        const filtredJobs = allJobs.filter((job)=>{
          return job.title.toLowerCase().includes(searchQurey.toLowerCase()) || job.description.toLowerCase().includes(searchQurey.toLowerCase()) || job.location.toLowerCase().includes(searchQurey.toLowerCase()) ;
        })
        
        setFilterJobs(filtredJobs);
      }else{
        setFilterJobs(allJobs);
      }
  },[allJobs,searchQurey]);



  return (
    <div className="">
      <Navbar />

      <div className="max-w-6xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-[20%]">
            <FillterCard />
          </div>
          {
            filterJobs.length <= 0 ? <span>Job not found</span> :(
                <div className="flex-1 h-[88vh] overflow-y-auto">
                    <div className="grid grid-cols-3 gap-4 ">
                        {filterJobs.map((job)=>(
                            <motion.div
                              initial={{opacity:0,x:100}}
                              animate={{opacity:1,x:0}}
                              transition={{duration:0.3}}
                              exit={{opacity:0,x:-100}}
                             key={job._id}>
                                <Job job={job}/>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Jobs;
