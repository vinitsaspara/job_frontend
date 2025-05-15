import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import {  setSearchCompanyByText } from '@/redux/companySlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByTest } from '@/redux/jobSlice'

function CompanyJob() {

    
    useGetAllAdminJobs();
    // console.log(jobId);

    const navigate = useNavigate();
    const [input,setInput] = useState("");

    const dispatch = useDispatch();


    useEffect(()=>{
      dispatch(setSearchJobByTest(input));
    },[input]);
    
  return (
    <div>
        <Navbar/>
        <div className="p-5 rounded-md max-w-5xl mx-auto shadow-lg">
            <div className="flex items-center justify-between my-5">
            <Input
            className="w-fit"
            placeholder="Filter by name, role"
            onChange = {(e)=>setInput(e.target.value)}
            ></Input>
            <Button onClick={()=>navigate('/admin/jobs/create')}>
                New Job
            </Button>
            </div>
            <AdminJobsTable/>
        </div>
    </div>
  )
}

export default CompanyJob