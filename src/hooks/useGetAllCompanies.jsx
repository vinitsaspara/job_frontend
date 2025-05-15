import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { setCompanies } from '@/redux/companySlice.js';

function useGetAllCompanies() {

    const dispatch = useDispatch();

    useEffect(()=>{
        
        const fetchCompanies = async () =>{
            try {
                
                const res = await axios.get(`${COMPANY_API_END_POINT}/get`,{withCredentials: true});
                
                if(res.data.success){
                    dispatch(setCompanies(res.data.compnies));
                }
  
            } catch (error) {
                console.log(error);
            }
        }
        fetchCompanies();
    },[])

    
}

export default useGetAllCompanies