
    import React, { useEffect } from 'react'
    import { useDispatch } from 'react-redux';
    import axios from 'axios';
    import { COMPANY_API_END_POINT } from '@/utils/constant';
    import { setSingleCompany } from '@/redux/companySlice';

    function useGetCompanyById(companyId) {

        console.log("hello",companyId);
        const dispatch = useDispatch();

        useEffect(()=>{
            
            const fetchSingleCompany = async () =>{
                try {
                    
                    const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`,{withCredentials: true});

                    // console.log(res);
                    
                    
                    if(res.data.success){
                        dispatch(setSingleCompany(res.data.company));
                    }

                } catch (error) {
                    console.log(error);
                }
            }
            fetchSingleCompany();
        },[companyId,dispatch])
    }

    export default useGetCompanyById