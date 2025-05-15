import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

function JobDescription() {
  const params = useParams();
  const jobId = params.id;
  const user = useSelector((store) => store.auth.user);
  
  const { singleJob } = useSelector((store) => store.job);
  const isInitiallyAplied =
    singleJob?.applications?.some(application => application.applicant === singleJob._id
    ) || false;

    // console.log(isInitiallyAplied);
    
  
    const [isApplied,setIsApplied] = useState(isInitiallyAplied);

  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios(
        `https://job-backend-ed7z.onrender.com/api/v1/application/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.status) {
        setIsApplied(true); // update the local state
        const updatedSingleJob = {...singleJob,applications:[...singleJob.applications,{applicant : user?._id}]};
        dispatch(setSingleJob(updatedSingleJob)); // for real time ui update
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/v1/job/get/${jobId}`,
          { withCredentials: true }
        );
        // console.log(res);
        
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));

          res.data.job.applications.map((e)=>{
              if(e.applicant === user?._id){
                setIsApplied(true);
              }
          });      
        }
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="max-w-5xl mx-auto my-10 shadow-lg p-5 rounded-md">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-lg">{singleJob?.title}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className="text-blue-800 font-bold" variant="ghost">
              {singleJob?.position} position
            </Badge>
            <Badge className="text-[#903b3b] font-bold" variant="ghost">
              {singleJob?.jobType}
            </Badge>
            <Badge className="text-[#d98825]" variant="ghost">
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>

        <Button
          onClick={isApplied ? null : applyJobHandler}
          disabled={isApplied}
          className={`rounded-md ${
            isApplied
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-[#903b3b] hover:bg-[#d98825]"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>
      <div>
        <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
          Job Description
        </h1>
        <div className="my-4">
          <h1 className="font-bold my-1">
            Role:{" "}
            <span className="p;-4 font-normal text-gray-800">
              {singleJob?.title}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Location:{" "}
            <span className="p;-4 font-normal text-gray-800">
              {singleJob?.location}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Description:{" "}
            <span className="p;-4 font-normal text-gray-800">
              {singleJob?.description}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Experience:{" "}
            <span className="p;-4 font-normal text-gray-800">
              {singleJob?.experience} yrs
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Salary:{" "}
            <span className="p;-4 font-normal text-gray-800">
              {singleJob?.salary} LPA
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Total Applicants:{" "}
            <span className="p;-4 font-normal text-gray-800">
              {singleJob?.applications.length}
            </span>
          </h1>
          <h1 className="font-bold my-1">
            Posted Date:{" "}
            <span className="p;-4 font-normal text-gray-800">
              {singleJob?.createdAt.split("T")[0]}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
