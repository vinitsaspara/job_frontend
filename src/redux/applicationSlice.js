import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
    name: "application",
    initialState:{
        applicants:[],
    },
    reducers:{
        setApplicants:(sate,action)=>{
            sate.applicants=action.payload;
        }
    }
}) 

export const {setApplicants} = applicationSlice.actions
export default applicationSlice.reducer;