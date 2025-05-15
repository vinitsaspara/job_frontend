import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { toast } from "sonner";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { useNavigate } from "react-router-dom";

const companyArray = [];

function Postjob() {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });

  const companies = useSelector((store) => store.company.companies);
  const navigate = useNavigate();

  //   console.log(companies);

  const [loading,setLoading] = useState(false);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const selectChangeHandler = (value)=>{
    const selectedCompany = companies.find((company)=>company.name.toLowerCase() === value);
    setInput({ ...input, companyId: selectedCompany._id });
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    try {
        setLoading(true);

        const res = await axios.post(`${JOB_API_END_POINT}/post`,input,
            {
                headers:{
                "Content-Type": "application/json",
            },
            withCredentials:true
        }
        );

        if(res.data.success){
            toast.success(res.data.message);
            navigate('/admin/jobs');
        }

    } catch (error) {
        toast.error(error.response.data.message);
    }finally{
        setLoading(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center">
        <form onSubmit={submitHandler} className=" my-8 p-5 border max-w-3xl mx-auto rounded-md shadow-lg border-gray-300">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Title</Label>
              <Input
                type="text"
                name="title"
                value={input.title}
                onChange={changeEventHandler}
                className="my-1"
              ></Input>
            </div>
            <div>
              <Label>Description</Label>
              <Input
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                className="my-1"
              ></Input>
            </div>
            <div>
              <Label>Requirements</Label>
              <Input
                type="text"
                name="requirements"
                value={input.requirements}
                onChange={changeEventHandler}
                className="my-1"
              ></Input>
            </div>
            <div>
              <Label>Salary</Label>
              <Input
                type="text"
                name="salary"
                value={input.salary}
                onChange={changeEventHandler}
                className="my-1"
              ></Input>
            </div>
            <div>
              <Label>Location</Label>
              <Input
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                className="my-1"
              ></Input>
            </div>
            <div>
              <Label>Job Type</Label>
              <Input
                type="text"
                name="jobType"
                value={input.jobType}
                onChange={changeEventHandler}
                className="my-1"
              ></Input>
            </div>
            <div>
              <Label>Experience Level</Label>
              <Input
                type="text"
                name="experience"
                value={input.experience}
                onChange={changeEventHandler}
                className="my-1"
              ></Input>
            </div>
            <div>
              <Label>Number of Position</Label>
              <Input
                type="number"
                name="position"
                value={input.position}
                onChange={changeEventHandler}
                className="my-1"
              ></Input>
            </div>
            {companies?.length > 0 && (
              <Select onValueChange={selectChangeHandler} >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {
                        companies.map((company)=>{
                            return (

                                <SelectItem value={company?.name.toLowerCase()}>{company.name}</SelectItem>
                            )
                        })
                    }
                    
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          </div>
          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin">
                please wait
              </Loader2>{" "}
            </Button>
          ) : (
            <Button type="submit" className="w-full mt-10">
              Post New Job
            </Button>
          )}
          {
          companies.length === 0 && (
            <p className="text-xs text-red-600 font-bold text-center my-3 ">
              *Please register company first, before posting a job.{" "}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Postjob;
