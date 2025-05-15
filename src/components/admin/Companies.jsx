import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import { setCompanies, setSearchCompanyByText } from '@/redux/companySlice'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function Companies() {

    useGetAllCompanies();
    const navigate = useNavigate();
    const [input,setInput] = useState("");

    const dispatch = useDispatch();


    useEffect(()=>{
      dispatch(setSearchCompanyByText(input));
    },[input]);
    
  return (
    <div>
        <Navbar/>
        <div className="p-5 rounded-md max-w-5xl mx-auto shadow-lg">
            <div className="flex items-center justify-between my-5">
            <Input
            className="w-fit"
            placeholder="Filter by name"
            onChange = {(e)=>setInput(e.target.value)}
            ></Input>
            <Button onClick={()=>navigate('/admin/companies/create')}>
                New Company
            </Button>
            </div>
            <CompaniesTable/>
        </div>
    </div>
  )
}

export default Companies