import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';

function useGetAllAdminJobs() {
    const dispatch = useDispatch();
    useEffect(()=>{
        
        const fetchAllAdminJobs = async () =>{
            try {
                // console.log("hello");
                
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`,{withCredentials: true});
                
                // console.log(res);
                
                if(res.data.success){
                    dispatch(setAllAdminJobs(res.data.jobs));
                }

            } catch (error) {
                console.log(error);
            }
        }
        fetchAllAdminJobs();
    },[])
}

export default useGetAllAdminJobs