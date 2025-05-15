import { setAllJobs } from '@/redux/jobSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import store from '@/redux/store';
import { JOB_API_END_POINT } from '@/utils/constant';

function useGetAllJobs() {

    const searchedQurey = useSelector(store=>store.job.searchQurey);

    const dispatch = useDispatch();
    useEffect(()=>{
        

        const fetchAllJobs = async () =>{
            try {
                
                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQurey}`,{withCredentials: true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs));
                }

            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    },[])
}

export default useGetAllJobs