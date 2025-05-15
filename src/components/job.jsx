import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";


function job({job}) {

  const navigate =useNavigate(); 
  // const jobId = "kdfoifowehfowe"

  const daysAgoFunction = (mongodbTime)=>{
      const createdAt = new Date(mongodbTime);
      const currentTime = new Date();
      const timeDiff = currentTime - createdAt;

      return Math.floor(timeDiff/(1000*24*60*60));
  }

  return (
    <div className="p-5 rounded-md shadow-lg bg-white border border-gray-100">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">{daysAgoFunction(job?.createdAt) === 0 ? "Today" : `${daysAgoFunction(job?.createdAt)}`} days ago</p>
        <Button variant="outline" className="rounded-md " size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size-icon>
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium ">{job?.company?.name}</h1>
          <p className="text-sm text-gray-600">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job?.title}</h1>
        <p className="text-sm text-gray-600">
        {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-800 font-bold" variant="ghost">
        {job?.position} positions
        </Badge>
        <Badge className="text-[#903b3b] font-bold" variant="ghost">
        {job?.jobType}
        </Badge>
        <Badge className="text-[#d98825]" variant="ghost">
        {job?.salary} LPA
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <Button variant="outline" onClick={()=>navigate(`/description/${job?._id}`)}>Details</Button>
        <Button className="bg-[#903b3b] hover:bg-[#be5555]">Save For Latter</Button>
      </div>
    </div>
  );
}

export default job;
