import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const useGetAppliedJobs = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{
        const fetchAppliedJobs = async () =>{
            try {
                
                // console.log("hello");

                const res = await axios.get(`https://job-backend-ed7z.onrender.com/api/v1/application/get` , {
                    withCredentials : true
                });
                
                // console.log(res.data);
                

                if(res.data.success){
                    dispatch(setAllAppliedJobs(res.data.application));
                }

            } catch (error) {
                toast.error(error.response.data.message);
            }
        }
        fetchAppliedJobs();
    },[])
}

export default useGetAppliedJobs;