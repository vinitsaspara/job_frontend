import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "@/redux/companySlice";
import { toast } from "sonner";

function CompanayCreate() {

    const navigate = useNavigate();
    const [companyName,setCompanyName] = useState();
    const dispatch = useDispatch();

    const registerNewCompany = async () =>{
        try {

            const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                headers:{
                    'Content-Type':'application/json'
                },
                withCredentials:true
            });

            // console.log(res);
            
            
            if(res?.data.success){
              console.log(res.data.company);
                dispatch(setSingleCompany(res.data.company));
                toast.success(res.data.message);
                const companyId = res.data?.company?._id
                navigate(`/admin/companies/${companyId}`);
            }

        } catch (error) {
            console.log(error);
        }
    } 

  return (
    <div>
      <Navbar />
      <div className="my-10 shadow-lg p-5 rounded-md max-w-4xl mx-auto">
        <div>
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="Jobhunt, Microsoft ..."
          onChange = {(e)=>setCompanyName(e.target.value)}
        />
        <div className="flex items-center gap-2 my-10">
          <Button onClick={()=>navigate('/admin/companies')}  variant="outline">Cancel</Button>
          <Button onClick={registerNewCompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default CompanayCreate;
